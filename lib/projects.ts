export type Project = {
  id: number;
  name: string;
  projectType: string;
  techStack: string[];
  highlight: string;
  category: string;
  description: string;
  image: string;
  link: string;
};
export const PROJECT_LIST: Project[] = [
  {
    id: 1,
    name: "CHITRA CRAFT",
    image: "/projects/chitra-craft.png",
    projectType: "Client Project",
    category: "E-commerce",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "ShadCN", "Wix"],
    highlight:
      "Built a scalable craft marketplace leveraging Wix backend business services for product management and operations.",
    description:
      "Chitra Craft is a modern e-commerce website designed for a craft store, showcasing a curated collection of handmade products. The platform allows users to explore products by category, view detailed descriptions and pricing, and easily connect with the store through an integrated contact form. The project focuses on clean UI, responsive design, and smooth user experience.",
    link: "https://chitracraft.ptechroom.online/",
  },
];
