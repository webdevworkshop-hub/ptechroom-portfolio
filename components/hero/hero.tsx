import { Button } from "@/components/ui/button";
import { AuroraText } from "../magicui/aurora-text";
import { BorderBeam } from "../magicui/border-beam";

export function Hero() {
  return (
    <section className="relative md:min-h-[60dvh] flex items-center justify-center  text-foreground">
      <div className="container mx-auto px-4 md:py-16 py-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Main Heading */}
          <div>
            <div className="text-primary-foreground text-left">&lt;H1&gt;</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-primary">Hello,</span>{" "}
              <span className="text-foreground">I&apos;m</span>{" "}
              <AuroraText className="font-title">Pratim</AuroraText>
            </h1>
            <div className="text-primary-foreground text-right">
              &lt;/H1&gt;
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl  max-w-2xl mx-auto leading-relaxed">
            Welcome to{" "}
            <span className="text-primary-foreground font-title">
              PTechRoom!
            </span>{" "}
            Lets build something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg">Let&apos;s Talk 💬</Button>
            <Button variant="outline" size="lg" className="relative">
              Download CV 📄
              <BorderBeam
                duration={4}
                size={70}
                reverse
                className="from-transparent via-primary-foreground/80 to-transparent"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
