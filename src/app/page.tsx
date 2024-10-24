import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MoveToTop from "@/components/MoveTop";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <MoveToTop />
      <Footer />
    </>
  );
};

export default Home;
