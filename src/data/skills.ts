export type Tone = "violet" | "sky" | "emerald" | "amber" | "teal" | "rose" | "indigo";

export interface SkillGroup {
  title: string;
  tone: Tone;
  featured?: boolean;
  skills: string[];
  usedIn?: string;
}

// To add a skill, add a string to the right list. Keep it to 7 groups.
export const skillGroups: SkillGroup[] = [
  {
    title: "Generative AI & agents",
    tone: "violet",
    featured: true,
    skills: [
      "Agentic AI",
      "LLM fine-tuning",
      "RAG",
      "Prompt engineering",
      "Multimodal AI",
      "LoRA / QLoRA",
      "DPO / GRPO",
      "Hugging Face",
      "LangChain",
      "Vector search",
    ],
    usedIn: "TAO Digital · OptimumAI · StudyMind",
  },
  {
    title: "Machine learning & deep learning",
    tone: "sky",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "CNNs",
      "Transfer learning",
      "Hyperparameter tuning",
      "Model evaluation",
    ],
    usedIn: "Codtech · Credit Risk Prediction · Research",
  },
  {
    title: "Computer vision",
    tone: "emerald",
    skills: ["OpenCV", "YOLOv8", "R-CNN", "ResNet50", "OCR", "Image segmentation", "Data augmentation"],
    usedIn: "CircuitSense · AutoDamage AI · Medical Data Extraction",
  },
  {
    title: "Federated & privacy-preserving ML",
    tone: "amber",
    skills: [
      "Federated learning",
      "FedAvg / FedAdam",
      "Non-IID data",
      "Imbalanced learning",
      "SMOTE",
      "Privacy-preserving ML",
      "IoT / IoTtalk",
    ],
    usedIn: "FLTalk · FedDeepSMOTE · NSTC lab project",
  },
  {
    title: "Data & cloud",
    tone: "teal",
    skills: [
      "Databricks",
      "Snowflake",
      "SQL",
      "Pandas",
      "NumPy",
      "ETL pipelines",
      "MySQL",
      "MongoDB",
      "AWS AI services",
    ],
    usedIn: "TAO Digital · Codtech",
  },
  {
    title: "Engineering & deployment",
    tone: "rose",
    skills: [
      "Python",
      "JavaScript",
      "C / C++",
      "FastAPI",
      "Flask",
      "Streamlit",
      "REST APIs",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Git / GitHub",
    ],
    usedIn: "StudyMind · Codtech · Expense Tracker",
  },
  {
    title: "Tools & research workflow",
    tone: "indigo",
    skills: ["Jupyter", "Google Colab", "VS Code", "PyCharm", "LaTeX / Overleaf", "Zotero", "Matplotlib / Seaborn"],
  },
];

export const strengths = [
  "Problem solving",
  "Research",
  "Collaboration",
  "Communication",
  "Leadership",
  "Mentoring",
];