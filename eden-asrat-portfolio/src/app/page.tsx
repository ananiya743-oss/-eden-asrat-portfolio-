import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Specialties } from "@/components/portfolio/specialties";
import { Services } from "@/components/portfolio/services";
import { WhyHire } from "@/components/portfolio/why-hire";
import { Gallery } from "@/components/portfolio/gallery";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Services />
      <WhyHire />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
