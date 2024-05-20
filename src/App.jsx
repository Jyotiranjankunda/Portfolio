import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Aboutme from './components/aboutme/Aboutme';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      {/* <div className="section">
        <Navbar />
      </div> */}
      {/* <div className="section">
        <Home />
      </div>
      <div className="section">
        <Aboutme />
      </div>
      <div className="section">
        <Skills />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Experience />
      </div>
      <div className="section">
        <Contact />
      </div> */}
    </div>
  );
};

export default App;
