import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Aboutme from './components/aboutme/Aboutme';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
// import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div id="container">
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
