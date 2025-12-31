import { Project, PROJECT_LIST } from "@/lib/projects";
import { AnimatedMouseSVG } from "../ui/animated-svg";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";

export function Works() {
  return (
    <section className="relative min-h-[80vh] ">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-center relative -top-3">
          <AnimatedMouseSVG />
        </div>
        <h2 className="text-2xl font-bold ">
          Things I&apos;ve Worked on, Some of Them are:
        </h2>
        <div className="grid mt-10  gap-5 place-items-center">
          {PROJECT_LIST.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="max-w-5xl lg:w-full relative group hover:scale-105 transition-all duration-500">
      <div className="absolute top-0 right-0 w-full max-w-xl h-[90%] bg-black/50 rounded-lg hidden lg:block shadow-lg">
        <Image src={project.image} alt={project.name} width={800} height={700} className="object-cover rounded-lg" />
      </div>

      <div className="space-y-2 relative ">
        <p className="text-sm text-gray-500">{project.projectType}</p>
        <h3 className="text-2xl  text-primary-foreground font-title w-fit">
          <Link
            href={project.link}
            target="_blank"
            className=" flex items-end gap-2"
          >
            {project.name} <ArrowUpRightIcon className="w-4 h-4 mb-1 " />
          </Link>
        </h3>

        <div className="bg-background p-4 rounded-lg text-sm max-w-xl text-gray-300">
          {project.description}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <h4 className="text-sm text-gray-500">Technologies Used:</h4>
          {project.techStack.map((tech) => (
            <div key={tech}>
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <h4 className="text-sm text-gray-500">Category:</h4>
          <Badge variant="secondary">{project.category}</Badge>
        </div>

        <h4 className="text-sm text-gray-500 font-bold italic">
          {" "}
          {project.highlight}
        </h4>
      </div>
    </div>
  );
};
