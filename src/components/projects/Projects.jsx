import Card from '../Card/Card';
import classes from './projects.module.css';
import { PROJECTS } from '../../lib/projects.js';

const Projects = () => {
  return (
    <>
      <div className={classes.dummy} id='dummy-projects'></div>
      <div className={classes.projects} id='projects'>
        <p className={classes.heading}>Projects</p>
        <p className={classes.description}>Here are some of my key projects.</p>
        <div className={classes.cards}>
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              image={project.image}
              heading={project.heading}
              text={project.text}
              sourceCode={project.sourceCode}
              project={project.project}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
