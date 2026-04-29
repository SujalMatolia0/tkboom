import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2ede6]">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Skills />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
