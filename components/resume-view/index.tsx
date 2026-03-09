"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Briefcase,
  Download,
  ExternalLink,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const skills = {
  languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  frameworks: ["React.js", "Next.js", "Tailwind CSS", "Redux", "REST APIs"],
  tools: ["Git", "GitHub", "VS Code", "npm/yarn", "Vercel"],
  concepts: [
    "Responsive Web Design",
    "Component Architecture",
    "Performance Optimization",
    "Cross-Browser Compatibility",
    "Mobile-First Design",
    "Web Accessibility (WCAG)",
    "SEO Best Practices",
  ],
};

const experiences = [
  {
    company: "Growth Panda",
    location: "Bengaluru, Karnataka, India (Remote)",
    role: "Frontend Developer",
    period: "Oct 2024 -- Present",
    points: [
      "Engineered and maintained responsive, interactive applications using React.js, Next.js, and Tailwind CSS.",
      "Collaborated with UI/UX designers and backend engineers to deliver pixel-perfect, cross-browser interfaces.",
      "Built reusable design-system level components to reduce delivery time across features.",
      "Implemented mobile-first layouts for reliable experience from 320px to 4K screens.",
      "Integrated REST APIs and optimized data-fetching with SSR/SSG for stronger performance.",
    ],
  },
  {
    company: "Euphoria GenX",
    location: "Kolkata, West Bengal, India",
    role: "MERN Stack Developer Intern",
    period: "Jul 2023 -- Nov 2023",
    points: [
      "Completed an intensive 5-month MERN industrial training program with hands-on full-stack work.",
      "Built full-stack features including auth flows, CRUD modules, and dynamic UI components.",
      "Worked with REST API design, schema modeling, and frontend-backend integration.",
    ],
  },
];

const projects = [
  {
    title: "Personal Portfolio Website",
    stack: "Next.js, TypeScript, Tailwind CSS",
    year: "2024",
    href: "https://ptechroom.online",
    points: [
      "Designed and developed a fully responsive portfolio with Lighthouse performance score 90+.",
      "Implemented SEO enhancements with meta tags, Open Graph, and structured data.",
    ],
  },
  {
    title: "Dynamic Web Application",
    stack: "React.js, TypeScript, REST API",
    year: "2023",
    points: [
      "Built a scalable component-driven web app with state management and API integration.",
      "Applied lazy loading, memoization, and debouncing for smoother UX.",
    ],
  },
];

const certifications = [
  "Certificate of Academic Excellence",
  "National Service Scheme (NSS) Certificate",
  "MERN Stack Industrial Training",
];

function Section({
  id,
  title,
  children,
  delay = 0,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className="scroll-mt-28"
    >
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-primary" />
        <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

export function ResumeView() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-20">
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-2xl border border-border/60 bg-gradient-to-b from-card to-card/60 p-6 md:p-8 shadow-sm backdrop-blur"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Pratim Bera
            </h1>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Frontend Developer focused on performant, accessible, and scalable
              web experiences.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <Link
                href="mailto:pratimbworkshop@gmail.com"
                className="rounded-full border px-3 py-1 hover:bg-accent transition-colors"
              >
                pratimbworkshop@gmail.com
              </Link>
              <Link
                href="https://www.linkedin.com/in/pratimbera-464281241"
                target="_blank"
                className="rounded-full border px-3 py-1 hover:bg-accent transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/Pratim05"
                target="_blank"
                className="rounded-full border px-3 py-1 hover:bg-accent transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>

          <div className="flex gap-2">
            <Link
              href="/resume/pratim_bera_resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
            <Link
              href="/resume/pratim_bera_resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              <Download className="h-4 w-4" />
              Download
            </Link>
          </div>
        </div>
      </motion.header>

      <div className="sticky top-4 z-10 mt-4 mb-8 rounded-xl border border-border/60 bg-background p-2 backdrop-blur">
        <nav className="flex flex-wrap gap-2 text-sm justify-center ">
          {[
            ["summary", "Summary"],
            ["skills", "Skills"],
            ["experience", "Experience"],
            ["projects", "Projects"],
            ["education", "Education"],
            ["achievements", "Certifications"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-md px-3 py-1.5 hover:bg-accent  text-primary hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="space-y-10">
        <Section id="summary" title="Professional Summary">
          <p className="rounded-xl border bg-card/40 p-4 leading-relaxed text-sm md:text-base">
            Results-driven Frontend Developer with 1.5+ years of experience
            building scalable, responsive, and high-performance applications
            using React.js, Next.js, TypeScript, and Tailwind CSS. Strong in
            component-driven architecture, mobile-first implementation, and
            SSR/SSG optimization for seamless user experiences.
          </p>
        </Section>

        <Section id="skills" title="Technical Skills" delay={0.05}>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <motion.div
                key={group}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-xl border bg-card/40 p-4"
              >
                <h3 className="mb-3 text-sm font-semibold capitalize">
                  {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1 text-xs md:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" delay={0.1}>
          <div className="space-y-5">
            {experiences.map((experience) => (
              <motion.article
                key={experience.company}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 250, damping: 24 }}
                className="rounded-xl border bg-card/40 p-5"
              >
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {experience.company}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {experience.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {experience.location}
                    </p>
                  </div>
                  <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                    {experience.period}
                  </span>
                </div>
                <ul className="space-y-2 text-sm">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" delay={0.15}>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -4, rotate: -0.3 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="rounded-xl border bg-card/40 p-5"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {project.stack}
                    </p>
                  </div>
                  <span className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <ul className="space-y-2 text-sm">
                  {project.points.map((point) => (
                    <li key={point} className="list-disc ml-5">
                      {point}
                    </li>
                  ))}
                </ul>
                {project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    View live demo
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                ) : null}
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education" delay={0.2}>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="rounded-xl border bg-card/40 p-5"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">
                  Global Institute of Science and Technology
                </h3>
                <p className="text-sm text-muted-foreground">
                  Bachelor of Computer Applications (BCA) - Jul 2021 -- Jul 2024
                </p>
                <p className="text-xs text-muted-foreground">
                  Haldia, West Bengal, India
                </p>
              </div>
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <ul className="space-y-2 text-sm">
              <li className="list-disc ml-5">
                Relevant coursework: Data Structures and Algorithms, OOP, DBMS,
                Computer Networks, Software Engineering, and Web Technologies.
              </li>
              <li className="list-disc ml-5">
                Recipient of Certificate of Academic Excellence; active NSS
                member.
              </li>
            </ul>
          </motion.div>
        </Section>

        <Section
          id="achievements"
          title="Achievements & Certifications"
          delay={0.25}
        >
          <div className="flex flex-wrap gap-2">
            {certifications.map((item) => (
              <motion.span
                key={item}
                whileHover={{ y: -2, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-sm"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
