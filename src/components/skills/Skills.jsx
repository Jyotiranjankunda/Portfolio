import classes from './skills.module.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import sass from '../../assets/sass.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import mongodb from '../../assets/mongodb.png';
import mysql from '../../assets/mysql.png';
import c from '../../assets/c.png';
import cpp from '../../assets/cpp.png';
import java from '../../assets/java.png';
import git from '../../assets/git.png';
import github from '../../assets/github.png';
import postman from '../../assets/postman.png';
import figma from '../../assets/figma.png';

const Skills = () => {
  const skillSet = [
    { name: 'HTML', percentage: 90, img: html },
    { name: 'CSS', percentage: 85, img: css },
    { name: 'Javascript', percentage: 80, img: js },
    { name: 'ReactJs', percentage: 75, img: react },
    { name: 'NodeJs', percentage: 50, img: node },
    { name: 'MongoDB', percentage: 50, img: mongodb },
    { name: 'MySQL', percentage: 70, img: mysql },
    { name: 'C++', percentage: 90, img: cpp },
    { name: 'Java', percentage: 50, img: java },
    { name: 'Git', percentage: 60, img: git },
    { name: 'GitHub', percentage: 50, img: github },
    { name: 'Figma', percentage: 50, img: figma },
  ];

  return (
    <>
      <div className={classes.dummy} id='dummy-skills'></div>
      <div className={classes.skills} id='skills'>
        <section className={classes.skillSection}>
          <div className={`${classes.header} ${classes.skillHead}`}>
            <h2 className={classes.heading}>
              My <span>Skills</span>
            </h2>
            <p>Here is my skill set to represent my expertise.</p>
          </div>

          <div className={classes.skillMain}>
            {skillSet.map((skill, index) => (
              <div className={classes.skillBar} key={index}>
                <div className={classes.info}>
                  <div className={classes.logo}>
                    <img
                      src={skill.img}
                      alt={`${skill.name} logo`}
                      className={classes.skillLogo}
                    />
                    <p className={classes.skillName}>{skill.name}</p>
                  </div>
                  <p className={classes.percent}>{skill.percentage}%</p>
                </div>
                <div className={classes.bar}>
                  <span style={{ width: `${skill.percentage}%` }}></span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Skills;
