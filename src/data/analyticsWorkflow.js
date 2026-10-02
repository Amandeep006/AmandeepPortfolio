export const analyticsWorkflowSteps = [
  {
    id: 1,
    stepNum: "01",
    title: "Data Collection",
    shortLabel: "DATA COLLECTION",
    description: "Gather relevant raw data from reliable sources.",
    tools: ["CSV", "Excel", "MySQL", "APIs"],
    iconKey: "database",
    color: "#10B981"
  },
  {
    id: 2,
    stepNum: "02",
    title: "Data Cleaning",
    shortLabel: "DATA CLEANING",
    description: "Prepare raw data by handling missing values, duplicates and inconsistencies.",
    tools: ["Python", "Pandas", "NumPy"],
    iconKey: "datacleaning",
    color: "#3B82F6"
  },
  {
    id: 3,
    stepNum: "03",
    title: "Exploratory Data Analysis",
    shortLabel: "EDA",
    description: "Explore patterns, trends, distributions and relationships within the data.",
    tools: ["Pandas", "Matplotlib", "Seaborn", "Plotly"],
    iconKey: "eda",
    color: "#8B5CF6"
  },
  {
    id: 4,
    stepNum: "04",
    title: "SQL Analysis",
    shortLabel: "SQL ANALYSIS",
    description: "Query and analyze structured data to uncover meaningful patterns.",
    tools: ["SQL", "MySQL", "PostgreSQL"],
    iconKey: "sql",
    color: "#A855F7"
  },
  {
    id: 5,
    stepNum: "05",
    title: "Visualization",
    shortLabel: "VISUALIZATION",
    description: "Transform analytical findings into clear visual representations.",
    tools: ["Power BI", "Matplotlib", "Seaborn", "Plotly", "Excel"],
    iconKey: "dataviz",
    color: "#06B6D4"
  },
  {
    id: 6,
    stepNum: "06",
    title: "Dashboard",
    shortLabel: "DASHBOARD",
    description: "Build interactive dashboards combining KPIs, charts and filters.",
    tools: ["Power BI", "Excel", "DAX", "Power Query"],
    iconKey: "powerbi",
    color: "#F2C811"
  },
  {
    id: 7,
    stepNum: "07",
    title: "Business Insights",
    shortLabel: "INSIGHTS",
    description: "Translate analytical findings into actionable business insights.",
    tools: ["KPIs", "Trends", "Customer Insights", "Revenue Insights"],
    iconKey: "trending",
    color: "#EC4899"
  }
];
