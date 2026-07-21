import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
    </main>
  );
}
