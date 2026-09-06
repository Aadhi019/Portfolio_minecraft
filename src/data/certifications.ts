export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  credentialUrl: string;
  description: string;
  enchantmentLevel: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "iitm-mldl",
    title: "Intro to ML, DL and Computer Vision",
    issuer: "IIT Madras",
    year: "2023",
    category: "AI & Machine Learning",
    credentialUrl: "[ADD VERIFICATION LINK]",
    description: "Rigorous academic certification covering machine learning fundamentals, deep learning neural networks, convolutional networks, and computer vision pipelines.",
    enchantmentLevel: "III"
  },
  {
    id: "ibm-genai",
    title: "Introduction to Generative AI",
    issuer: "IBM",
    year: "2025",
    category: "Generative AI",
    credentialUrl: "[ADD VERIFICATION LINK]",
    description: "Comprehensive foundational certification on Large Language Models, prompt engineering, generative architectures, and practical enterprise AI applications.",
    enchantmentLevel: "IV"
  },
  {
    id: "gl-c",
    title: "C for Beginners",
    issuer: "Great Learning",
    year: "2025",
    category: "Systems Programming",
    credentialUrl: "[ADD VERIFICATION LINK]",
    description: "Structured certification on procedural C programming, data structures, pointer mechanics, and system-level computing fundamentals.",
    enchantmentLevel: "IV"
  },
  {
    id: "aws-cert",
    title: "AWS Training & Certification",
    issuer: "Amazon Web Services (AWS)",
    year: "2026",
    category: "Cloud Architecture",
    credentialUrl: "[ADD VERIFICATION LINK]",
    description: "Cloud computing concepts, AWS core infrastructure, compute, serverless primitives, and resilient system deployment paradigms.",
    enchantmentLevel: "IV"
  }
];
