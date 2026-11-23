// ==========================================
// PORTFOLIO KE PROJECTS (yahi aap ka tracker hai)
//
// Naya project mukammal hone par:
//   1. us ka status "planned" se "live" karein
//   2. live aur code ke links likhein
//   3. file GitHub par upload karein
// ==========================================

// true karne se "planned" projects bhi nazar aate hain (sirf apne dekhne ke liye)
const SHOW_PLANNED = false;

const projects = [

    // ---------- LIVE ----------
    {
        id: "saudi-property",
        title: "Saudi Property: Bilingual Real Estate Website",
        summary: "A real estate website in English and Arabic with right-to-left layout, property search and filters, photo galleries, a mortgage estimate, saved properties, a broker application form, a newsletter and a built-in assistant. Listings are samples for demonstration.",
        draws: "Web & APIs, JavaScript",
        cats: ["web"],
        tags: ["HTML", "CSS", "JavaScript", "English & Arabic (RTL)"],
        status: "live",
        year: 2026,
        live: "https://wasift22.github.io/saudi-peoperty-demo/",
        code: "",
        case: ""
    },
    {
        id: "beautiful-face",
        title: "Beautiful Face: Online Skin Care Shop",
        summary: "A responsive online shop with product search, category filters, sorting, product pages, a shopping cart saved in the browser, and a checkout that sends orders by email.",
        draws: "Web & APIs, JavaScript",
        cats: ["web"],
        tags: ["HTML", "CSS", "JavaScript", "Formspree"],
        status: "live",
        year: 2026,
        live: "https://wasift22.github.io/Beautiful-Face/",
        code: "",
        case: ""
    },

    // ---------- ROADMAP (ek ek karke banayenge) ----------
    {
        id: "rag-assistant",
        title: "Document Q&A Assistant (RAG)",
        summary: "Ask questions about public documents and get answers with sources, using retrieval-augmented generation.",
        draws: "Sasna: NLP, GenAI, LLMs, RAG",
        cats: ["genai"],
        tags: ["Python", "LangChain", "Hugging Face", "RAG"],
        status: "planned", year: 2026, live: "", code: "", case: ""
    },
    {
        id: "airflow-etl",
        title: "Automated ETL Pipeline with Airflow",
        summary: "A scheduled data pipeline that loads, cleans and stores data with quality checks, packaged with Docker.",
        draws: "Sasna, Wareef, Swat: ETL and data pipelines",
        cats: ["data"],
        tags: ["Python", "SQL", "Airflow", "Docker"],
        status: "planned", year: 2026, live: "", code: "", case: ""
    },
    {
        id: "rental-analytics",
        title: "Property Rental Analytics Dashboard",
        summary: "An interactive dashboard on rental and maintenance data, built on synthetic data.",
        draws: "Wareef: property data and dashboards",
        cats: ["data"],
        tags: ["SQL", "Python", "Dashboards"],
        status: "planned", year: 2026, live: "", code: "", case: ""
    },
    {
        id: "rental-price-api",
        title: "Rental Price Prediction API",
        summary: "A machine learning model served through a REST API, with documentation and a Docker image.",
        draws: "Wareef: predictive analytics; FastAPI",
        cats: ["ml"],
        tags: ["scikit-learn", "FastAPI", "Docker"],
        status: "planned", year: 2026, live: "", code: "", case: ""
    },
    {
        id: "sql-agent",
        title: "SQL Agent: Ask Your Database in Plain Language",
        summary: "An AI agent that turns questions into read-only SQL queries, with safety checks.",
        draws: "Agentic AI, LLMs, SQL",
        cats: ["genai"],
        tags: ["Python", "LangChain", "SQL"],
        status: "planned", year: 2026, live: "", code: "", case: ""
    },
    {
        id: "arabic-sentiment",
        title: "Arabic and English Sentiment Analysis",
        summary: "A sentiment analysis pipeline for reviews in Arabic and English.",
        draws: "Swat Education: sentiment analysis, NLP",
        cats: ["genai", "ml"],
        tags: ["Python", "Hugging Face", "NLP"],
        status: "planned", year: 2026, live: "", code: "", case: ""
    },
    {
        id: "pyspark-processing",
        title: "Large-Scale Data Processing with PySpark",
        summary: "Processing a large public dataset with PySpark, with performance notes.",
        draws: "Apache Spark, PySpark, scalable processing",
        cats: ["data"],
        tags: ["PySpark", "Python", "SQL"],
        status: "planned", year: 2026, live: "", code: "", case: ""
    },
    {
        id: "load-forecasting",
        title: "System Load Forecasting",
        summary: "Forecasting system load for capacity planning on a public time-series dataset.",
        draws: "Unilever: forecasting and capacity planning",
        cats: ["ml"],
        tags: ["Python", "scikit-learn", "Time series"],
        status: "planned", year: 2026, live: "", code: "", case: ""
    },
    {
        id: "data-quality",
        title: "Data Quality & Governance Toolkit",
        summary: "Reusable data quality checks and a governance report for any dataset.",
        draws: "Sabk, Wareef, Future-Tech: data governance",
        cats: ["data"],
        tags: ["Python", "SQL", "Data quality"],
        status: "planned", year: 2026, live: "", code: "", case: ""
    },
    {
        id: "network-analyzer",
        title: "Network Performance Analyzer",
        summary: "Parsing synthetic network logs and detecting unusual behavior with Python.",
        draws: "Future-Tech: Cisco networks, Python scripts",
        cats: ["data"],
        tags: ["Python", "Cisco", "Anomaly detection"],
        status: "planned", year: 2026, live: "", code: "", case: ""
    },
    {
        id: "cloud-pipeline",
        title: "Cloud Data Pipeline (Azure or AWS)",
        summary: "A managed cloud pipeline built while completing my cloud learning.",
        draws: "Azure and AWS (currently learning)",
        cats: ["data"],
        tags: ["Azure Data Factory", "AWS Glue"],
        status: "planned", year: 2026, live: "", code: "", case: ""
    }
];
