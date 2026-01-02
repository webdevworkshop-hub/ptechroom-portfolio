import { About } from "@/components/about/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero/hero";
import { Works } from "@/components/works";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative mt-10">
      <div className="relative">
        <Image
          src="/hero/hero-bg.png"
          alt="Background"
          width={1000}
          height={1000}
          className="absolute lg:-top-30   lg:h-[100vh]  right-0 "
        />

        <Hero />
        <About />
      </div>
      <Experience />
      <Works />

      <div>
        <Image
          src="/bottom-bg.png"
          alt="Background"
          width={400}
          height={400}
          className="absolute bottom-0 right-0 w-full max-w-2xl h-96 object-cover -z-10"
        />
      </div>
    </div>
  );
}
