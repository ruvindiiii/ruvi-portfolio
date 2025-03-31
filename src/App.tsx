import Hero from "./components/Hero";
import { BackgroundGradient } from "./components/ui/background-gradient";

import AboutMe from "./sections/AboutMe";
import Tech from "./sections/Tech";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <BackgroundGradient>
      <Hero />
      <AboutMe />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </BackgroundGradient>
  );
}

export default App;
