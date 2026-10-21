import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import PortfolioInteractions from "../components/PortfolioInteractions";

export default function HomePage() {
  return (
    <>
      <PortfolioInteractions />
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
