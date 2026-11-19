export interface Project {
  name: string;
  category: "Research" | "Generative AI" | "Computer Vision" | "Machine Learning";
  flagship?: boolean;
  kpis: { value: string; label: string }[];
  note?: string;
  description: string;
  skills: string[];
  links?: { github?: string; demo?: string; paper?: string };
}

// Technical projects only (research work lives in the Research section).
// Keep this to 5. To add a project, copy a block; to make room, move the weakest one to moreProjects.
export const featuredProjects: Project[] = [
  {
    name: "StudyMind",
    category: "Generative AI",
    flagship: true,
    kpis: [
      { value: "80%", label: "Retrieval accuracy" },
      { value: "+20 pts", label: "Gain over the first version" },
    ],
    note: "Measured with a custom evaluation harness. Answers are source-cited.",
    description:
      "A production-grade AI assistant that answers questions from a live, growing knowledge base with source-cited, hallucination-guarded responses. New documents can be added on the fly, so the system keeps improving without redeployment.",
    skills: ["RAG", "LangChain", "Qdrant", "Sentence-Transformers", "FastAPI", "Streamlit"],
    links: { github: "https://github.com/ali-liyakat/RAG_Knowledge_Assistant", demo: "https://ragknowledgeassistant786.streamlit.app/" },
  },
  {
    name: "CircuitSense",
    category: "Computer Vision",
    kpis: [
      { value: "98.3%", label: "mAP50" },
      { value: "96.4%", label: "Recall" },
    ],
    note: "Held-out test set of 10,000+ images across 6 defect types.",
    description:
      "Automated visual inspection that spots six types of PCB manufacturing defects from a single image, delivered through a live web app for instant quality checks.",
    skills: ["YOLOv8", "Computer Vision", "Streamlit"],
    links: { github: "https://github.com/ali-liyakat/CircuitSense", demo: "https://circuitsense-cv4k.streamlit.app/" },
  },
  {
    name: "AutoDamage AI",
    category: "Computer Vision",
    kpis: [
      { value: "78.3%", label: "Validation accuracy" },
      { value: "6", label: "Damage classes" },
    ],
    note: "Transfer learning with data augmentation.",
    description:
      "Image-based vehicle damage assessment that sorts photos into six damage categories, with a simple interface and API for instant predictions.",
    skills: ["ResNet50", "Transfer Learning", "FastAPI", "Streamlit"],
    links: { github: "https://github.com/ali-liyakat/AutoDamage_AI", demo: "https://autodamageai.streamlit.app/" },
  },
  {
    name: "Medical Data Extraction",
    category: "Computer Vision",
    kpis: [{ value: "+40%", label: "Extraction accuracy" }],
    note: "Output is structured for analytics and dashboards.",
    description:
      "An automated document-digitisation workflow that turns scanned medical PDFs into structured patient and diagnostic data, ready for downstream analysis.",
    skills: ["OCR", "OpenCV", "PyTesseract", "pdf2image", "Python"],
    links: { github: "https://github.com/ali-liyakat/Medical-Data-Extraction" },
  },
  {
    name: "Credit Risk Prediction",
    category: "Machine Learning",
    kpis: [
      { value: "0.87", label: "AUC" },
      { value: "43", label: "KS statistic" },
    ],
    note: "Exceeds benchmark thresholds with 50+ engineered features.",
    description:
      "A loan-default scoring pipeline that turns applicant and behavioural data into interpretable risk scores, built to clear industry benchmarks and support clear lending decisions.",
    skills: ["XGBoost", "Scikit-learn", "Feature Engineering", "Streamlit"],
    links: { github: "https://github.com/ali-liyakat/Credit_Risk_Modelling", demo: "https://customer-credit-risk-modelling.streamlit.app/" },
  },
];

export const moreProjects: { name: string; summary: string; url?: string }[] = [
  {
    name: "Healthcare Premium Predictor",
    summary: "Insurance premium prediction pipeline that cut prediction error by 18% through tuning and model segmentation.",
    url: "https://github.com/ali-liyakat/Healthcare_Premium_Prediction",
  },
  {
    name: "Student Mental Health Risk Scoring",
    summary: "Informational lifestyle-based risk score built from student habits. Not a clinical tool.",
    url: "https://github.com/ali-liyakat/Student_Mental_Health_score",
  },
  {
    name: "Expense Tracking System",
    summary: "Full-stack expense tracker with a FastAPI backend, optimised queries and automated tests.",
    url: "https://github.com/ali-liyakat/Expense-Tracking-System",
  },
  {
    name: "Real Estate Price Prediction",
    summary: "Property price prediction model that uses a decision tree on location, size and amenity data to estimate market value, with feature engineering and cross-validation for reliable results.",
    url: "https://github.com/ali-liyakat/Real-Estate-Price-Prediction",
  }
];