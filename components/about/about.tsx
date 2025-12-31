import Image from "next/image";
import { AnimatedMouseSVG } from "../ui/animated-svg";
import { BlurFade } from "../ui/blur-fade";

export function About() {
  return (
    <section className="relative min-h-[80vh] ">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-center relative -top-10">
          <AnimatedMouseSVG />
        </div>

        <div className="grid md:grid-cols-2 gap-10  mx-auto max-w-7xl relative -top-20 justify-between">
          <div className="space-y-6">
            <h2 className="text-2xl  font-title">
              Curious about me? Here you have it{" "}
            </h2>
            <div className="space-y-5 text-foreground/80 leading-relaxed text-sm">
              <BlurFade delay={0.25} inView direction="left">
                <p>
                  Hi, I&apos;m a
                  <span className="text-primary-foreground font-medium text-lg ">
                    {" "}
                    Frontend Developer
                  </span>{" "}
                  passionate about building modern, responsive, and
                  user-friendly web applications. I enjoy turning ideas into
                  interactive experiences with clean code, elegant UI, and
                  smooth animations.
                </p>
              </BlurFade>

              <BlurFade delay={0.5} inView direction="right">
                <p>
                  My core stack includes{" "}
                  <span className="font-medium text-foreground">
                    React, Next.js, TypeScript, and Tailwind CSS
                  </span>
                  . I also love experimenting with UI libraries like ShadCN,
                  Radix, and Framer Motion to craft seamless user experiences.
                  Beyond coding, I care deeply about design consistency,
                  accessibility, and performance optimization.
                </p>
              </BlurFade>

              <BlurFade delay={0.75} inView direction="left">
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  tech trends, contributing to personal projects, or learning
                  ways to improve as a developer. My goal is simple: to create
                  web experiences that are not only functional but also{" "}
                  <span className="italic">
                    delightful to use . One last thing, I&apos;m available for
                    freelance work, so feel free to reach out and say hello! I
                    promise I don&apos;t bite{" "}
                  </span>{" "}
                  😉.
                </p>
              </BlurFade>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/about/about-me.png"
              alt="About"
              width={400}
              height={400}
              className="rounded-2xl shadow-lg border-2 border-primary-foreground/20  scale-x-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
