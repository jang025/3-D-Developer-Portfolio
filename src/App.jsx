import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
};

export default App;
