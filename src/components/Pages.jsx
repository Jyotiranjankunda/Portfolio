import Home from './home/Home';
import Aboutme from './aboutme/Aboutme';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Experience from './experience/Experience';
import Contact from './contact/Contact';
import classes from './pages.module.css';

const pages = () => {
  return (
    <div className={classes.container}>
      <div>
        <Home />
      </div>
      <div>
        <Aboutme />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default pages;
