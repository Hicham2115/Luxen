import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
