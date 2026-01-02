"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { AuroraText } from "../magicui/aurora-text";
import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/Pratim05",
    icon: <Github className="text-primary-foreground" />,
    label: "Github",
  },
  {
    href: "https://www.linkedin.com/in/pratim-bera-464281241",
    icon: <Linkedin className="text-primary-foreground" />,
    label: "Linkedin",
  },
  {
    href: "https://www.instagram.com/_pratim_05/",
    icon: <Instagram className="text-primary-foreground" />,
    label: "Instagram",
  },
];

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 w-full z-10 px-8 lg:px-32 py-5 transition-all duration-300 borer",
        isScrolled &&
          "backdrop-blur-md bg-background/60  shadow-sm"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 70,
        mass: 1,
        delay: 0.7,
      }}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className=" text-xl md:text-3xl font-bold font-title">
            <AuroraText speed={2.5}>&lt;P/&gt;</AuroraText>TechRoom
          </h1>
        </Link>

        <div className="hidden md:grid grid-cols-3 gap-4">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              className="flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:text-primary-foreground"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
