import { About } from "@/components/about/about";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
