import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="contain px-9 lg:px-32 py-8 ">
      <div className="flex justify-between items-center">

        <Link href="/">
          <h1 className="text-3xl font-bold"><span className="text-primary-foreground ">&lt;P/&gt;</span>TechRoom
          </h1>
        </Link>

        <div className="grid grid-cols-3 gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Github className="text-primary-foreground" /> Github
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Linkedin className="text-primary-foreground" /> Linkedin
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Instagram className="text-primary-foreground" /> Instagram
          </Link>
        </div>
      </div>
      <hr className="mt-8" />
    </header>
  )
}


