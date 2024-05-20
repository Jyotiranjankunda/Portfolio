import classes from './navbar.module.css';
import dp from '../../assets/dp.png';
import { useState } from 'react';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div id={classes.navbar}>
      <a href='#home'><img src={dp} alt='DP' className={classes.dp} /></a>
      <div className={classes.navlinks}>
        <ul className={classes.links}>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About Me</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="projects">
            <li>Projects</li>
          </a>
          <a href="#experience">
            <li>Experience</li>
          </a>
        </ul>
      </div>
      <div className={classes.getintouch}>
        <a href='#contact' className={classes.button}>
          Get In Touch
        </a>
      </div>

      {isClicked ? (
        <span className={classes.cross}>
          <i
            className='fa-solid fa-xmark cross'
            style={{ color: 'white' }}
            onClick={handleClick}></i>
        </span>
      ) : (
        <span className={classes.bars}>
          <i className='fa-solid fa-bars bars' onClick={handleClick}></i>
        </span>
      )}

      {isClicked && (
        <div className={classes.menu}>
          <ul className={classes.links}>
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Experience</li>
            <a href='#contact' className={classes.button}>
              Get In Touch
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
