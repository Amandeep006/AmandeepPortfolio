export const profileData = {
  name: "Amandeep Saini",
  badgeTitle: "DATA ANALYST",
  primaryRole: "Data Analyst",
  alternativeTitle: "Data Analytics | Python | SQL | Power BI | Excel",
  shortPositioning: "Turning raw data into meaningful insights.",
  bio: "I am an aspiring Data Analyst with hands-on experience working with Python, SQL, Power BI, and Excel. I enjoy exploring datasets, cleaning and transforming information, discovering hidden patterns, and presenting actionable insights through interactive dashboards and clear visualizations.",
  location: "India",
  email: "amandeepsaini951@gmail.com",
  status: "Available for Internships & Entry-Level Data Analyst Roles",
  resumeUrl: "#resume", // User can link real PDF file
  githubUrl: "https://github.com/Amandeep006",
  linkedinUrl: "https://www.linkedin.com/in/amandeep-saini-5bb3842b7",
  
  heroSnippet: {
    language: "sql",
    code: `SELECT 
    customer_segment,
    COUNT(order_id) AS total_orders,
    ROUND(SUM(revenue), 2) AS total_revenue
FROM sales_data
WHERE order_date >= '2026-01-01'
GROUP BY customer_segment
ORDER BY total_revenue DESC;`
  },

  analyticsWorkflow: [
    {
      step: "01",
      title: "Data Collection",
      description: "Gathering raw structured and unstructured data from SQL databases, APIs, CSVs, and web sources.",
      icon: "Database"
    },
    {
      step: "02",
      title: "Data Cleaning & Prep",
      description: "Handling missing values, deduplication, normalizing types, and transforming data with Python (Pandas) & SQL.",
      icon: "Filter"
    },
    {
      step: "03",
      title: "Exploratory Data Analysis",
      description: "Uncovering distributions, correlation matrixes, trends, and anomalies using Python (NumPy, Seaborn, Matplotlib).",
      icon: "Search"
    },
    {
      step: "04",
      title: "SQL Analysis & Querying",
      description: "Writing complex queries, CTEs, Window Functions, and aggregations to extract core metrics.",
      icon: "Code"
    },
    {
      step: "05",
      title: "Data Visualization",
      description: "Crafting intuitive visual charts, scatter plots, heatmaps, and custom data graphics.",
      icon: "PieChart"
    },
    {
      step: "06",
      title: "Dashboard Building",
      description: "Developing automated, interactive dashboards in Power BI & Excel with DAX formulas.",
      icon: "LayoutDashboard"
    },
    {
      step: "07",
      title: "Business Insights",
      description: "Translating data findings into executive summaries and actionable recommendations for decision-makers.",
      icon: "TrendingUp"
    }
  ]
};
