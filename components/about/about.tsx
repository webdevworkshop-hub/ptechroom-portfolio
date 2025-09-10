import { AnimatedMouseSVG } from "../ui/animated-svg";

export function About() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div>
          <AnimatedMouseSVG />
        </div>

        <div className="grid gap-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">About Me</h2>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Hi, I&apos;m <span className="font-semibold text-foreground">Pratim Bera</span>, a{" "}
              <span className="text-primary font-medium">Frontend Developer</span> passionate about
              building modern, responsive, and user-friendly web applications. I enjoy turning ideas
              into interactive experiences with clean code, elegant UI, and smooth animations.
            </p>

            <p>
              My core stack includes{" "}
              <span className="font-medium text-foreground">React, Next.js, TypeScript, and
              Tailwind CSS</span>. I also love experimenting with UI libraries like ShadCN, Radix,
              and Framer Motion to craft seamless user experiences. Beyond coding, I care deeply
              about design consistency, accessibility, and performance optimization.
            </p>

            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new tech trends, contributing
              to personal projects, or learning ways to improve as a developer. My goal is simple:
              to create web experiences that are not only functional but also{" "}
              <span className="italic">delightful to use</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
