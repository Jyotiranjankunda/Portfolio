import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Aboutme from "./components/aboutme/Aboutme";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Aboutme />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
    </div>
    );
};

export default App;
