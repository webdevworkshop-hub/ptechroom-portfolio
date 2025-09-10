
import { Button } from "@/components/ui/button"
import { AuroraText } from "../magicui/aurora-text"
import { BorderBeam } from "../magicui/border-beam"
import { TypingAnimation } from "../magicui/typing-animation"

export function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center bg-background text-foreground">
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    {/* Main Heading */}
                    <div>
                        <div className="text-primary-foreground text-left">&lt;H1/&gt;</div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="text-primary">Hello,</span>{" "}
                            <span className="text-foreground">I&apos;m</span>{" "}
                            <AuroraText>
                                Pratim
                            </AuroraText>
                        </h1>
                        <div className="text-primary-foreground text-right">&lt;/H1&gt;</div>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                        Frontend Developer crafting beautiful and functional web experiences
                    </p>

                    {/* Description */}
                    <TypingAnimation className=" text-foreground/80 max-w-xl mx-auto">
                        I help businesses grow by creating amazing frontend experiences. If you&apos;re
                        looking for a developer that likes to get stuff done, let&apos;s talk.
                    </TypingAnimation>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Button
                            size="lg"
                        >
                            Let&apos;s Talk 💬
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="relative"
                        >
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
    )
}

