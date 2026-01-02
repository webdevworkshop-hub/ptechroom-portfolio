"use client";
import { Button } from "@/components/ui/button";
import { AuroraText } from "../magicui/aurora-text";
import { BorderBeam } from "../magicui/border-beam";
import { motion } from "motion/react";
import { TypingAnimation } from "../magicui/typing-animation";
import { FadeDown } from "../ui/animated-section";

export function Hero() {
  return (
    <section className="relative md:min-h-[60dvh] flex items-center justify-center  text-foreground">
      <div className="container mx-auto px-4 md:py-16 py-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Main Heading */}
          <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.7 }}>
          
            <div className="text-primary-foreground text-left">&lt;H1&gt;</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-primary">Hello,</span>{" "}
              <span className="text-foreground">I&apos;m</span>{" "}
              <AuroraText className="font-title">
                Pratim
              </AuroraText>
            </h1>
            <div className="text-primary-foreground text-right">
              &lt;/H1&gt;
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 1 }}
          className="text-xl md:text-2xl  max-w-2xl mx-auto leading-relaxed">
            Welcome to{" "}
            <span className="text-primary-foreground font-title">
              PTechRoom!
            </span>{" "}
           <TypingAnimation delay={1.5} duration={70}>Lets build something amazing together.</TypingAnimation>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <FadeDown delay={1.5}>
            <Button size="lg">Let&apos;s Talk 💬</Button>
            </FadeDown>
            <FadeDown delay={2}>
            <Button  variant="outline" size="lg" className="relative">
              Download CV 📄
              <BorderBeam
                duration={4}
                size={70}
                reverse
                className="from-transparent via-primary-foreground/80 to-transparent"
              />
            </Button>
            </FadeDown>
          </div>
        </div>
      </div>
    </section>
  );
}
