import Image from "next/image";
import { AnimatedMouseSVG } from "../ui/animated-svg";
import { Badge } from "../ui/badge";
import Link from "next/link";

const EXPERIENCE_DATA = [
    {
        id: 1,
        title: "Frontend Developer",
        company: {
            name: "GROWTH PANDA",
            url: "https://growthpanda.co",
            logo: "/experience/company-logos/gp-logo.png",
        }
        ,
        description: [
            "Developed and maintained the frontend of the company's website using React, Next.js, and Tailwind CSS.",
            "Collaborated with the design team to implement the company's brand and design guidelines.",
            "Optimized the website for performance and SEO.",
            "Implemented new features and functionality to the website.",
            "Troubleshot and resolved issues with the website.",
        ],
        date: "Oct 2024 - Present",
        technologies: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "ShadCN",
            "Framer Motion",
            "React Hook Form",
            "React Query",
            "React Router",
        ],
    }
]

export function Experience() {
    return (
        <section className="relative bg-background min-h-[80vh] ">
            <div className="container mx-auto w-fit px-4 ">
                <div className="flex justify-center relative -top-10">
                    <AnimatedMouseSVG />
                </div>

                <h2 className="text-2xl font-bold text-center">Here is a quick summary of my most recent experiences</h2>

                <div className="grid mt-10  gap-5">
                    {EXPERIENCE_DATA.map((experience) => (
                        <div key={experience.id} className="bg-background p-6 rounded-lg drop-shadow-lg max-w-4xl grid md:grid-cols-[1fr_auto] gap-4"
                            style={{
                                background: "linear-gradient(90deg, #111827 0%, rgba(0, 0, 0, 0.6) 100%)",
                            }}
                        >

                            {/* Info Section */}
                            <div className="space-y-4">
                                <h3 className="text-2xl  font-title">{experience.title} <span className="text-sm text-gray-300">({experience.date})</span></h3>
                                <div>
                                    <h4 className="  mb-2 font-title">Responsibilities & Achievements</h4>
                                    <ul className="list-disc list-inside text-sm text-gray-300">
                                        {experience.description.map((description) => (
                                            <li key={description}>{description}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className=" font-bold mb-2">Technologies I&apos;ve worked with</h4>
                                    <ul className=" flex flex-wrap gap-2">
                                        {experience.technologies.map((technology) => (
                                            <li key={technology}>
                                                <Badge>
                                                    {technology}
                                                </Badge>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className=" flex flex-col items-center justify-center gap-4">
                                <Image src={experience.company.logo} alt={experience.company.name} width={100} height={100}  className="object-contain"/>
                                <Link href={experience.company.url} target="_blank" className="text-xl font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors">{experience.company.name}</Link>
                            </div>

                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}