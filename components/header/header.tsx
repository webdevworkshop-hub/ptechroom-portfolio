import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { AuroraText } from "../magicui/aurora-text";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Pratim05",
    icon: <Github className="text-primary-foreground" />,
    label: "Github"
  },
  {
    href: "https://www.linkedin.com/in/pratim-bera-464281241",
    icon: <Linkedin className="text-primary-foreground" />,
    label: "Linkedin"
  },
  {
    href: "https://www.instagram.com/_pratim_05/",
    icon: <Instagram className="text-primary-foreground" />,
    label: "Instagram"
  }
]

export function Header() {
  return (
    <header className="relative contain px-9 lg:px-32 py-5 z-10 ">
      <div className="flex justify-between items-center">

        <Link href="/">
          <h1 className="text-3xl font-bold font-title"><AuroraText speed={2.5}>&lt;P/&gt;</AuroraText>TechRoom
          </h1>
        </Link>

        <div className=" grid-cols-3 gap-4 hidden md:grid">
         {SOCIAL_LINKS.map((link) => (
          <Link href={link.href} target="_blank" className="flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:text-primary-foreground" key={link.href}>
            {link.icon} {link.label}
          </Link>
         ))}
        </div>
      </div>
      <hr className="mt-8" />
    </header>
  )
}


