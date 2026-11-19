type Links = Record<string, string | undefined>;

export interface Kpi {
  value: string;
  label: string;
}

export interface Publication {
  title: string;
  authors: string[]; // write names exactly as on the paper
  venue: string;
  year: number;
  type: string;
  links?: Links; // paper, pdf, code
}

export interface ResearchProject {
  label: string;
  title: string;
  shortName?: string;
  period: string;
    award?: string;
  meta?: string;
  description: string;
  kpis?: Kpi[];
  note?: string;
  caseStudy?: {
    title: string;
    description: string;
    kpis: Kpi[];
    note?: string;
  };
  skills: string[];
  links?: Links; // thesis, paper, code, award
  wide?: boolean;
}

export const researchStatement =
  "My research focuses on privacy-preserving, distributed machine learning for IoT, with growing work in computer vision, LLMs and agentic systems.";

export const interests = [
  "Federated learning",
  "Privacy-preserving AI",
  "IoT and edge intelligence",
  "Imbalanced learning",
  "Computer vision",
  "LLMs and agents",
];

// Newest first. To add a paper, copy a block and put it at the top.
export const publications: Publication[] = [
  {
    title: "Implementing Federated Learning via IoTtalk: A Smart Home Case Study",
    authors: ["Liyakat Ali", "Chih-Yu Lin"],
    venue: "2025 IEEE VTS Asia Pacific Wireless Communications Symposium (APWCS 2025), Tokyo, Japan, IEEE",
    year: 2025,
    type: "Conference paper",
    links: { paper: "https://ieeexplore.ieee.org/document/11151953", pdf: "", code: "https://github.com/ali-liyakat/FLtalk-Federated-Learning-via-IoTtalk" },
  },
  {
    title: "Object Detection and Segregation Using R-CNN",
    authors: ["Kirubha D.", "Liyakat Ali", "MD. Saif", "Prem Kumar J.", "Kush Upadhyay"],
    venue: "2023 IJARIIE National Conference on VLSI Communication and Signal Processing, Karnataka, India, pp. 217–223",
    year: 2023,
    type: "National conference paper",
    links: { paper: "https://github.com/ali-liyakat/object-detection-using-R-CNN/blob/master/Object%20Detection%20And%20Segregation%20Using%20R-CNN.pdf", pdf: "", code: "https://github.com/ali-liyakat/object-detection-using-R-CNN" },
  },
];

// Newest first. Set wide: true for a full-width card.
export const researchProjects: ResearchProject[] = [
  {
    label: "Master's thesis",
    title: "A GUI-based Federated Learning Framework: Implementation and Applications",
    shortName: "FLTalk",
    period: "Sep 2024 – Jul 2026",
    meta: "National Taiwan Ocean University · Advisor: Dr. Chih-Yu Lin",
    description:
      "A modular, GUI-driven framework for privacy-preserving federated learning on IoT devices. Collaborators train shared models without exchanging raw data, with pluggable aggregation strategies (FedAvg, FedAvgM, FedAdam) and real-time monitoring, validated on a real-world smart-home case study.",
    kpis: [
      { value: "79.6%", label: "Accuracy on real IoT data" },
      { value: "0.84", label: "ROC-AUC" },
    ],
    note: "Outperformed every local-only model.",
    caseStudy: {
      title: "FedDeepSMOTE",
      description:
        "Tackles class imbalance without sharing data. Clients jointly train a convolutional autoencoder, then generate synthetic minority-class samples by SMOTE interpolation in the shared latent space, so no raw data is ever transmitted or reconstructed.",
      kpis: [
        { value: "0.953", label: "Macro F1" },
        { value: "+9.2 pts", label: "Over imbalanced FL baseline" },
      ],
      note: "Imbalanced MNIST benchmark (4,000 vs 40 samples per class). Baselines: 0.861 imbalanced FL, 0.951 local-only.",
    },
    skills: ["Federated Learning", "IoTtalk", "PyTorch", "FedAvg / FedAdam", "REST APIs"],
    links: { thesis: "https://fltalk-system.onrender.com/", code: "https://github.com/ali-liyakat/FLTalk" },
    wide: true,
  },
  {
    label: "Lab project",
    title: "Federated Learning for Multimodal Vehicle Perception",
    period: "2025",
    award: "Excellent Project Achievement Award · NSTC, Taiwan (2025)",
    meta: "Smart Networking Lab, National Taiwan Ocean University",
    description:
      "Part of the Smart Networking Lab team behind a federated learning project for multimodal vehicle perception, recognised with the Excellent Project Achievement Award by Taiwan's National Science and Technology Council (NSTC).",
    skills: ["Federated Learning", "Multimodal Learning", "Vehicle Perception"],
    links: { award: "https://drive.google.com/file/d/1gxVtuAimiq2xuY6H-A9qVvxGMO46o9wb/view" },
  },
  {
    label: "B.E. major project · paper",
    title: "Object Detection and Segregation using R-CNN",
    period: "2023",
    meta: "Rajarajeswari College of Engineering (VTU) · Advisor: Dr. D. Kirubha",
    description:
      "An end-to-end object detection system that localises and sorts multiple object categories in images, video streams and live camera feeds, covering dataset preparation, region proposals, CNN feature extraction and non-maximum suppression.",
    skills: ["R-CNN", "TensorFlow", "Selective Search", "CNN"],
    links: { paper: "https://github.com/ali-liyakat/object-detection-using-R-CNN/blob/master/Object%20Detection%20And%20Segregation%20Using%20R-CNN.pdf", code: "https://github.com/ali-liyakat/object-detection-using-R-CNN" },
  },
];