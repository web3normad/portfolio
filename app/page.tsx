import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import Gallery from "./components/Gallery";
import Experience from "./components/Experience";
import OpenSource from "./components/OpenSource";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Leadership />
      <Gallery />
      <Experience />
      <OpenSource />
      <Contact />
      <Footer />
    </main>
  );
}
