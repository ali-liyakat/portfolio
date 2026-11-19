export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  skills: string[];
}

// Newest first. To add a role, copy a block and put it at the top.
export const experience: Experience[] = [
  {
    role: "Junior Software Engineer (AI)",
    company: "TAO Digital Solutions",
    period: "Aug 2026 – Present",
    points: [
      "Design and deliver agentic AI systems for the automotive industry that automate complex, multi-step workflows and support faster, better-informed decisions.",
      "Turn large-scale enterprise data into dependable AI capabilities, working closely with engineering and business teams to move solutions from idea to real-world use.",
    ],
    skills: ["Python", "Agentic AI", "Databricks", "Snowflake", "SQL"],
  },
  {
    role: "AI Engineer (Freelance)",
    company: "Aharbal IT",
    period: "Jun 2026 – Present",
    points: [
      "Deliver AI-powered systems for clients across multiple domains, turning real operational problems into practical, reliable solutions.",
      "Own projects end to end, from requirements through to dependable software that clients rely on every day.",
    ],
    skills: ["Python", "Computer Vision", "Deep Learning", "Software Engineering"],
  },
  {
    role: "Generative AI Research Intern",
    company: "OptimumAI",
    period: "Apr 2026 – May 2026",
    points: [
      "Adapted open-source language and multimodal models to specialised tasks, improving output quality while keeping training resource-efficient.",
      "Created multimodal generative AI workflows spanning text, vision and audio, from experimentation through to efficient inference.",
    ],
    skills: ["LLM Fine-tuning", "LoRA / QLoRA", "GRPO", "Multimodal AI", "Unsloth", "Hugging Face"],
  },
  {
    role: "Graduate Research Assistant",
    company: "National Taiwan Ocean University",
    period: "Sep 2024 – Jul 2026",
    points: [
      "Designed a modular federated learning framework that lets organisations train shared models without exchanging raw data, validated on a real-world IoT case study.",
      "Developed a new approach to learning from highly imbalanced, distributed data that outperformed strong baselines, and co-authored research presented at IEEE APWCS 2025.",
    ],
    skills: ["Federated Learning", "PyTorch", "Python", "IoTtalk"],
  },
  {
    role: "Data Science Intern",
    company: "Codtech IT Solutions",
    period: "Apr 2025 – Aug 2025",
    points: [
      "Turned raw business data into dependable predictive models that supported day-to-day decisions.",
      "Deployed models as real-time services, making predictions directly usable inside applications.",
    ],
    skills: ["Scikit-learn", "PyTorch", "FastAPI", "Flask"],
  },
  {
    role: "Machine Learning Intern",
    company: "Tequed Labs",
    period: "Sep 2022 – Nov 2022",
    points: [
      "Developed predictive models that turned messy datasets into reliable classification and regression results.",
      "Streamlined data preparation, improving data quality and shortening the path from raw data to model.",
    ],
    skills: ["Pandas", "Scikit-learn", "Python"],
  },
];