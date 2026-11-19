export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  highlight: { label: string; text: string };
  advisor?: string;
  honours: string[];
  courses: string[];
}

// Highest degree first.
export const education: Education[] = [
  {
    degree: "M.Sc. in Computer Science and Engineering",
    institution: "National Taiwan Ocean University",
    location: "Keelung, Taiwan",
    period: "Sep 2024 – Jul 2026",
    grade: "GPA 4.0 / 4.0",
    highlight: {
      label: "Thesis",
      text: "A GUI-based Federated Learning Framework: Implementation and Applications",
    },
    advisor: "Dr. Chih-Yu Lin",
    honours: [
      "NTOU Scholarship for academic excellence and research potential (2024–2026)",
      "NSTC Excellent Project Achievement Award, lab team (2025)",
    ],
    courses: [
      "Machine Learning",
      "Neural Networks and Deep Learning",
      "Reinforcement Learning",
      "Natural Language Processing",
      "Generative AI for Text and Image",
      "AI in Biomedicine",
    ],
  },
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "Rajarajeswari College of Engineering (VTU)",
    location: "Karnataka, India",
    period: "July 2019 – June 2023",
    grade: "CGPA 8.26 / 10",
    highlight: {
      label: "Major project",
      text: "Object Detection and Segregation using R-CNN",
    },
    advisor: "Dr. Kirubha D.",
    honours: ["AICTE Merit Scholarship (2019–2023)"],
    courses: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks and Security",
      "IoT and Big Data Analytics",
      "Data Mining",
    ],
  },
];