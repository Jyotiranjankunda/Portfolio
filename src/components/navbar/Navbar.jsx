import classes from './navbar.module.css';
import dp from '../../assets/dp.png';
import { useState } from 'react';
import contact from "../../assets/contact.png"

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <>
      <div className={classes.navbar} id='navbar'>
        <a href='#dummy-home'>
          <img src={dp} alt='DP' className={classes.dp} />
        </a>
        <div className={classes.navlinks}>
          <ul className={classes.links}>
            <li>
              <a href='#dummy-home'>Home</a>
            </li>
            <li>
              <a href='#dummy-about'>About Me</a>
            </li>
            <li>
              <a href='#dummy-skills'>Skills</a>
            </li>
            <li>
              <a href='#dummy-projects'>Projects</a>
            </li>
            <li>
              <a href='#dummy-experience'>Experience</a>
            </li>
          </ul>
        </div>
        <div className={classes.getintouch}>
          <a href='#dummy-contact' className={classes.button}>
            Get In Touch
          </a>
          <div className={classes.send}>
            <img src={contact} alt="" className={classes.contact} />
          </div>
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
    </>
  );
};

export default Navbar;
