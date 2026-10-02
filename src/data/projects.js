export const projectsData = [
  {
    id: "customer-behaviour-analysis",
    number: "01",
    title: "Customer Behaviour Analysis",
    subtitle: "E-Commerce Segmentation & Revenue Insights",
    category: ["Python", "SQL", "Power BI"],
    shortDescription: "Analyzed customer behavior data to identify purchasing patterns, customer segments, revenue trends, and actionable business insights.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/Amandeep006/Customer-Behaviour-Analysis",
    liveDemoUrl: "https://github.com/Amandeep006/Customer-Behaviour-Analysis",
    featured: true,
    highlights: [
      "Python EDA",
      "Data Cleaning",
      "SQL RFM Segmentation",
      "Power BI Executive Dashboard"
    ],
    caseStudy: {
      problemStatement: "The business struggled with customer retention and lacked visibility into high-value customer segments, repeat purchase rates, and churn risks across geographical regions.",
      datasetInfo: "Over 50,000 transaction records containing customer IDs, timestamps, product categories, unit prices, order quantities, and delivery statuses.",
      toolsUsed: ["Python (Pandas, Seaborn)", "MySQL", "Power BI", "DAX", "Power Query"],
      dataCleaningSteps: [
        "Handled 4.2% missing values in customer demographic fields using median imputation.",
        "Removed duplicate transaction records and filtered out cancelled or refunded orders.",
        "Standardized date formats and extracted temporal features (Month, Day of Week, Quarter).",
        "Created engineered features: Recency, Frequency, and Monetary (RFM) metrics per customer."
      ],
      exploratoryAnalysis: [
        "Discovered that Top 20% of customers contribute 68% of total gross revenue.",
        "Identified peak purchase activity between 6:00 PM and 9:00 PM on weekdays.",
        "Found a 24% higher repeat order rate among customers enrolled in loyalty programs."
      ],
      sqlQueries: [
        {
          title: "RFM Customer Segmentation Query",
          description: "Calculates Recency, Frequency, and Monetary values for every customer using CTEs and Window Functions.",
          query: `WITH CustomerRFM AS (
    SELECT 
        customer_id,
        DATEDIFF('2026-09-01', MAX(order_date)) AS recency,
        COUNT(DISTINCT order_id) AS frequency,
        ROUND(SUM(order_total), 2) AS monetary
    FROM orders
    WHERE order_status = 'Completed'
    GROUP BY customer_id
)
SELECT 
    customer_id,
    recency,
    frequency,
    monetary,
    NTILE(5) OVER (ORDER BY recency DESC) AS r_score,
    NTILE(5) OVER (ORDER BY frequency ASC) AS f_score,
    NTILE(5) OVER (ORDER BY monetary ASC) AS m_score
FROM CustomerRFM;`
        }
      ],
      keyInsights: [
        "High-value champions have an average order value 3.5x higher than casual buyers.",
        "Cart abandonment spikes during checkout steps involving non-standard payment gateways.",
        "Quarterly customer retention drops significantly after month 3 without re-engagement campaigns."
      ],
      businessRecommendations: [
        "Implement automated email triggers for customers entering the 'At Risk' RFM segment.",
        "Introduce targeted bundle promotions for high-converting product pairs identified in EDA.",
        "Streamline checkout payment options to reduce friction for mobile buyers."
      ]
    }
  },
  {
    id: "netflix-data-analysis",
    number: "02",
    title: "Netflix Data Analysis",
    subtitle: "Content Strategy & Distribution Patterns",
    category: ["Python", "SQL", "Data Visualization"],
    shortDescription: "Explored Netflix content data to analyze content distribution, genres, ratings, release trends, and regional production focus.",
    thumbnail: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/Amandeep006/Netflix-Data-Analysis",
    liveDemoUrl: "https://github.com/Amandeep006/Netflix-Data-Analysis",
    featured: true,
    highlights: [
      "Movies vs TV Shows Trend",
      "Genre Co-occurrence Matrix",
      "Director & Cast Analysis",
      "Release Year Heatmap"
    ],
    caseStudy: {
      problemStatement: "Understanding Netflix's shifting catalog focus from licensed content to original productions and identifying global entertainment trends over time.",
      datasetInfo: "8,800+ movies and TV shows available on Netflix, including title, director, cast, country, release year, rating, duration, and listed genres.",
      toolsUsed: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly", "PostgreSQL"],
      dataCleaningSteps: [
        "Parsed nested comma-separated values in 'country', 'cast', and 'listed_in' columns.",
        "Converted duration into separate numerical fields (Minutes for movies, Seasons for TV shows).",
        "Filled missing director values with 'Unknown' and imputed rating categories based on title metadata."
      ],
      exploratoryAnalysis: [
        "TV shows expanded from 20% of total titles in 2015 to nearly 32% by 2021.",
        "United States, India, and United Kingdom are the top 3 content producing nations.",
        "Dramas and Comedies represent over 45% of the total catalog distribution."
      ],
      sqlQueries: [
        {
          title: "Top Content Producing Countries per Genre",
          description: "Aggregation of catalog count partitioned by primary country and genre classification.",
          query: `SELECT 
    TRIM(UNNEST(STRING_TO_ARRAY(country, ','))) AS primary_country,
    type,
    COUNT(*) AS total_titles
FROM netflix_titles
WHERE country IS NOT NULL
GROUP BY primary_country, type
HAVING COUNT(*) > 50
ORDER BY total_titles DESC;`
        }
      ],
      keyInsights: [
        "International content additions grew by over 180% year-over-year between 2018 and 2021.",
        "Movie durations centered tightly around 90-105 minutes, whereas TV shows average 1-2 seasons.",
        "India leads in total movie count relative to TV series ratio compared to western markets."
      ],
      businessRecommendations: [
        "Increase investment in multi-season localized TV series in high-growth Asian markets.",
        "Optimize recommendation algorithms around genre co-occurrence nodes rather than single tags."
      ]
    }
  },
  {
    id: "pizza-sales-analysis",
    number: "03",
    title: "Pizza Sales Analysis",
    subtitle: "SQL-Driven Operations & Revenue Optimization",
    category: ["SQL", "Data Visualization"],
    shortDescription: "Performed SQL-based analysis of pizza sales to identify top-selling products, peak order hours, revenue trends, and operational bottlenecks.",
    thumbnail: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/Amandeep006/Pizza-Sales-Analysis",
    liveDemoUrl: "https://github.com/Amandeep006/Pizza-Sales-Analysis",
    featured: true,
    highlights: [
      "SQL KPI Queries",
      "Peak Hour Heatmap Data",
      "Category Revenue Shares",
      "Order Size Distribution"
    ],
    caseStudy: {
      problemStatement: "A pizza chain needed clear operational KPIs to optimize kitchen staffing during rush hours, adjust inventory orders, and promote high-margin menu items.",
      datasetInfo: "48,000+ individual order item records across a 12-month period with timestamps, order IDs, pizza sizes, categories, and unit pricing.",
      toolsUsed: ["MySQL", "SQL Workbench", "Excel Pivot Charts", "Power BI"],
      dataCleaningSteps: [
        "Validated total price calculation against quantity * unit_price.",
        "Parsed timestamps to extract Hour of Day, Day of Week, and Month for temporal analysis.",
        "Normalized pizza category and size naming conventions."
      ],
      exploratoryAnalysis: [
        "Large and Medium pizzas accounted for 64% of total order volume.",
        "Fridays between 12:00 PM - 1:15 PM and 5:00 PM - 7:30 PM generated the highest daily revenue.",
        "The Classic category generated the highest order count, while Supreme had the highest average order value."
      ],
      sqlQueries: [
        {
          title: "Percentage of Revenue by Pizza Category",
          description: "Calculates category-wise sales contribution to overall business revenue.",
          query: `SELECT 
    pizza_category,
    CAST(SUM(total_price) AS DECIMAL(10,2)) AS category_sales,
    CAST(SUM(total_price) * 100 / (SELECT SUM(total_price) FROM pizza_sales) AS DECIMAL(10,2)) AS revenue_percentage
FROM pizza_sales
GROUP BY pizza_category
ORDER BY revenue_percentage DESC;`
        }
      ],
      keyInsights: [
        "Thai Chicken and BBQ Chicken pizzas led overall revenue performance.",
        "Lunch rushes on weekdays require 30% more prep capacity than dinner rushes.",
        "Single pizza orders have higher profit margins per item than large combo packages."
      ],
      businessRecommendations: [
        "Schedule kitchen staff shifts according to hourly order density peaks.",
        "Create promotional combo deals around lower-performing side items to boost average ticket size."
      ]
    }
  },
  {
    id: "earthquake-data-visualization",
    number: "04",
    title: "Earthquake Data Visualization",
    subtitle: "Geospatial & Seismic Magnitude Mapping",
    category: ["Python", "Data Visualization"],
    shortDescription: "Created interactive visualizations to explore global earthquake data, tectonic boundary distributions, magnitude frequencies, and depth correlations.",
    thumbnail: "/images/earthquake-visualization.jpg",
    githubUrl: "https://github.com/Amandeep006/Earthquake-Data-Visualization",
    liveDemoUrl: "https://github.com/Amandeep006/Earthquake-Data-Visualization",
    featured: false,
    highlights: [
      "Geospatial Scatter Maps",
      "Depth vs Magnitude Correlation",
      "Plotly Interactive Filters",
      "Time-Series Seismic Spikes"
    ],
    caseStudy: {
      problemStatement: "Analyzing seismic activity dataset from USGS to map high-risk tectonic zones and visualize magnitude distribution patterns globally.",
      datasetInfo: "15,000+ earthquake events logged globally with coordinates, focal depth, magnitude, location description, and timestamp.",
      toolsUsed: ["Python", "Pandas", "Plotly Express", "Folium", "Matplotlib"],
      dataCleaningSteps: [
        "Filtered out seismic events classified as quarry blasts or non-tectonic explosions.",
        "Imputed missing depth measurements using regional geographic averages.",
        "Grouped events into standard magnitude tiers (Minor, Light, Moderate, Strong, Major)."
      ],
      exploratoryAnalysis: [
        "Over 75% of events with magnitude > 5.5 occurred along the Pacific 'Ring of Fire'.",
        "Deep-focus earthquakes (> 300 km) showed weaker surface magnitude correlations but distinct subduction zone alignment.",
        "Annual seismic event frequency remained consistent, while detection density increased due to sensor network improvements."
      ],
      sqlQueries: [],
      keyInsights: [
        "Interactive map reveals clear ocean trench boundaries.",
        "High-magnitude shallow events (< 70 km depth) represent the highest hazard risk zones."
      ],
      businessRecommendations: [
        "Deploy automated alerts for seismic event clusters exceeding magnitude 4.5 in vulnerable coastal regions."
      ]
    }
  },
  {
    id: "student-fees-management-system",
    number: "05",
    title: "Student Fees Management System",
    subtitle: "Automated Excel Tracking & Dues Dashboard",
    category: ["Excel"],
    shortDescription: "Created an Excel-based student fee management solution for organizing payment records, tracking pending dues, and generating dynamic summary reports.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/Amandeep006/Student-Fees-Management-System",
    liveDemoUrl: "https://github.com/Amandeep006/Student-Fees-Management-System",
    featured: false,
    highlights: [
      "Dynamic Excel Formulas (XLOOKUP, INDEX/MATCH)",
      "Automated Dues Calculation",
      "Conditional Formatting Alerts",
      "Interactive KPI Dashboard"
    ],
    caseStudy: {
      problemStatement: "An educational institution needed a reliable, user-friendly system to manage fee payments, monitor outstanding balances, and generate instant department-level financial summaries.",
      datasetInfo: "Student enrollment master database containing student IDs, departments, fee structures, installment records, payment dates, and pending amounts.",
      toolsUsed: ["Microsoft Excel", "Advanced Formulas", "Pivot Tables", "Slicers", "VBA Macros"],
      dataCleaningSteps: [
        "Standardized student enrollment IDs and department codes across spreadsheets.",
        "Built automated validation rules to prevent manual entry errors in fee amounts.",
        "Created dynamic date calculations to flag overdue installments automatically."
      ],
      exploratoryAnalysis: [
        "Identified that 18% of fee collection delays occurred due to missing automated reminder notifications.",
        "Built dynamic summary views allowing administrators to filter dues by semester, branch, and payment method."
      ],
      sqlQueries: [],
      keyInsights: [
        "Automated sheet calculations reduced manual fee record processing time by over 70%.",
        "Visual warning indicators significantly improved payment follow-up efficiency."
      ],
      businessRecommendations: [
        "Implement automated reminder alerts 5 days prior to fee installment due dates."
      ]
    }
  },
  {
    id: "habit-tracker-analytics",
    number: "06",
    title: "Habit Tracker Analytics",
    subtitle: "Personal Consistency & Goal Tracking Tool",
    category: ["Python", "Excel"],
    shortDescription: "Built a habit tracking and goal monitoring solution in Python & Excel to measure daily progress, streak consistency, and habit correlation.",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    githubUrl: "https://github.com/Amandeep006/Habit-Tracker",
    liveDemoUrl: "https://github.com/Amandeep006/Habit-Tracker",
    featured: false,
    highlights: [
      "Daily Streak Calculations",
      "Completion Heatmap Visualization",
      "Python CLI / Log Script",
      "Weekly Summary Reports"
    ],
    caseStudy: {
      problemStatement: "Building a lightweight analytics tracker to quantify daily habit completion, track long-term streaks, and spot productivity patterns.",
      datasetInfo: "Daily activity logs tracking health, learning, coding, and reading routines over 180 consecutive days.",
      toolsUsed: ["Python", "Pandas", "Excel", "Matplotlib"],
      dataCleaningSteps: [
        "Formatted daily timestamp logs and created boolean completion flags.",
        "Calculated rolling streak count algorithms handling missed days gracefully."
      ],
      exploratoryAnalysis: [
        "Found a 35% higher coding habit completion rate on days starting with morning reading routines.",
        "Weekend consistency was 15% lower than weekday consistency, leading to routine adjustments."
      ],
      sqlQueries: [],
      keyInsights: [
        "Visual streak heatmaps significantly boosted personal habit retention rates over 6 months."
      ],
      businessRecommendations: [
        "Utilize micro-goal tracking and visual feedback loops for skill development routines."
      ]
    }
  }
];
