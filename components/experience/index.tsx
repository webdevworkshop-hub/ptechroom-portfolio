import { AnimatedMouseSVG } from "../ui/animated-svg";

const EXPERIENCE_DATA = [
    {
        id: 1,
        title: "Frontend Developer",
        company: {
            name: "GROWTH PANDA",
            url: "https://growthpanda.co",
            logo: "/companies/growthpanda.png",
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
        ],
    }
]

export function Experience() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center">
            <div className="container mx-auto w-fit px-4 ">
                <div className="flex justify-center">
                    <AnimatedMouseSVG />
                </div>

                <h2 className="text-2xl font-bold text-center">Here is a quick summary of my most recent experiences</h2>

                <div className="grid mt-10  gap-5">
                    {EXPERIENCE_DATA.map((experience) => (
                        <div key={experience.id} className="bg-background p-4 rounded-lg drop-shadow-lg max-w-4xl">
                            <h3>{experience.title}</h3>
                            <p>{experience.company.name}</p>
                            <p>{experience.date}</p>
                            <p>{experience.description.join(", ")}</p>
                            <p>{experience.technologies.join(", ")}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}