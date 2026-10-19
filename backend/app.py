import os
import re
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error as MySQLError
from dotenv import load_dotenv

# Set up server-side logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s'
)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

DB_HOST = os.getenv("DB_HOST", "localhost")
DB_USER = os.getenv("DB_USER", "root")
DB_PASSWORD = os.getenv("DB_PASSWORD", "")
DB_NAME = os.getenv("DB_NAME", "PORTFOLIO")
DB_PORT = int(os.getenv("DB_PORT", 3306))
FLASK_PORT = int(os.getenv("FLASK_PORT", 5000))
FLASK_DEBUG = os.getenv("FLASK_DEBUG", "True").lower() == "true"

# Regular expression for email validation
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")

app = Flask(__name__)

# Enable CORS for all origins and routes under /api/*
CORS(app, resources={r"/api/*": {"origins": "*"}})


def get_db_connection(with_db=True):
    """
    Establish and return a connection to MySQL.
    If with_db is False, connects without selecting a specific database.
    """
    config = {
        "host": DB_HOST,
        "user": DB_USER,
        "password": DB_PASSWORD,
        "port": DB_PORT
    }
    if with_db:
        config["database"] = DB_NAME

    return mysql.connector.connect(**config)


def init_database():
    """
    Initialize database and table on startup:
    1. Creates the database (PORTFOLIO) if it doesn't already exist.
    2. Creates the `contacts` table if it doesn't already exist.
    """
    try:
        # Step 1: Connect to MySQL server without selecting database
        conn = get_db_connection(with_db=False)
        cursor = conn.cursor()
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS `{DB_NAME}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;")
        cursor.close()
        conn.close()
        logger.info(f"Database `{DB_NAME}` verified/created successfully.")

        # Step 2: Connect to the specific database and create table
        conn = get_db_connection(with_db=True)
        cursor = conn.cursor()
        create_table_query = """
        CREATE TABLE IF NOT EXISTS contacts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) NOT NULL,
            subject VARCHAR(200) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        """
        cursor.execute(create_table_query)
        conn.commit()
        cursor.close()
        conn.close()
        logger.info("Table `contacts` verified/created successfully.")

    except MySQLError as err:
        logger.error(f"Error during database initialization: {err}", exc_info=True)
        raise err


def validate_contact_payload(data):
    """
    Validate contact form data:
    - Checks required fields
    - Trims whitespace
    - Checks email format
    - Enforces maximum length constraints
    Returns (cleaned_data_dict, error_message_or_None)
    """
    if not isinstance(data, dict):
        return None, "Invalid JSON payload provided."

    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip()
    subject = str(data.get("subject", "")).strip()
    message = str(data.get("message", "")).strip()

    # Required field checks
    if not name:
        return None, "Name is required."
    if not email:
        return None, "Email is required."
    if not subject:
        return None, "Subject is required."
    if not message:
        return None, "Message is required."

    # Length constraints
    if len(name) > 100:
        return None, "Name cannot exceed 100 characters."
    if len(email) > 150:
        return None, "Email cannot exceed 150 characters."
    if len(subject) > 200:
        return None, "Subject cannot exceed 200 characters."
    if len(message) > 5000:
        return None, "Message cannot exceed 5000 characters."

    # Email format check
    if not EMAIL_REGEX.match(email):
        return None, "Please provide a valid email address (e.g., user@example.com)."

    return {
        "name": name,
        "email": email,
        "subject": subject,
        "message": message
    }, None


@app.route("/api/health", methods=["GET"])
def health_check():
    """
    Health check route to confirm server status and MySQL database connectivity.
    """
    try:
        conn = get_db_connection(with_db=True)
        cursor = conn.cursor()
        cursor.execute("SELECT 1;")
        cursor.fetchone()
        cursor.close()
        conn.close()
        return jsonify({
            "status": "healthy",
            "server": "running",
            "database": "connected",
            "database_name": DB_NAME
        }), 200
    except Exception as err:
        logger.error(f"Health check failed: {err}", exc_info=True)
        return jsonify({
            "status": "degraded",
            "server": "running",
            "database": "disconnected",
            "error": "Unable to connect to MySQL database."
        }), 503


@app.route("/api/contact", methods=["POST"])
def submit_contact():
    """
    Contact form submission endpoint:
    - Accepts JSON payload with name, email, subject, message
    - Validates payload
    - Saves record to MySQL `contacts` table using parameterized query
    - Returns 201 on success, 400 on validation failure, 500 on database error
    """
    raw_json = request.get_json(silent=True)
    if raw_json is None:
        return jsonify({
            "success": False,
            "error": "Malformed request. Please send a valid JSON body with Content-Type: application/json."
        }), 400

    # Validate inputs
    cleaned_data, error_msg = validate_contact_payload(raw_json)
    if error_msg:
        return jsonify({
            "success": False,
            "error": error_msg
        }), 400

    conn = None
    cursor = None
    try:
        conn = get_db_connection(with_db=True)
        cursor = conn.cursor()

        # Parameterized query to prevent SQL Injection
        insert_query = """
            INSERT INTO contacts (name, email, subject, message)
            VALUES (%s, %s, %s, %s)
        """
        cursor.execute(insert_query, (
            cleaned_data["name"],
            cleaned_data["email"],
            cleaned_data["subject"],
            cleaned_data["message"]
        ))
        conn.commit()
        inserted_id = cursor.lastrowid

        logger.info(f"Successfully inserted contact submission id={inserted_id} from {cleaned_data['email']}")

        return jsonify({
            "success": True,
            "message": "Message sent successfully!",
            "id": inserted_id
        }), 201

    except MySQLError as db_err:
        logger.error(f"MySQL Error in /api/contact: {db_err}", exc_info=True)
        return jsonify({
            "success": False,
            "error": "Database error occurred while saving your message. Please try again later."
        }), 500

    except Exception as err:
        logger.error(f"Unexpected server error in /api/contact: {err}", exc_info=True)
        return jsonify({
            "success": False,
            "error": "An internal server error occurred. Please try again later."
        }), 500

    finally:
        if cursor is not None:
            try:
                cursor.close()
            except Exception:
                pass
        if conn is not None and conn.is_connected():
            try:
                conn.close()
            except Exception:
                pass


if __name__ == "__main__":
    try:
        logger.info("Initializing database and tables...")
        init_database()
        logger.info(f"Starting Flask server on http://localhost:{FLASK_PORT}...")
        app.run(host="0.0.0.0", port=FLASK_PORT, debug=FLASK_DEBUG)
    except Exception as startup_err:
        logger.critical(f"Server startup failed: {startup_err}", exc_info=True)
