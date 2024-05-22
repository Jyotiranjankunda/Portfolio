import classes from './navbar.module.css';
import dp from '../../assets/dp.png';
import { useState, useEffect } from 'react';
import { FaMessage } from 'react-icons/fa6';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const scrollToTop = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
        document.body.scrollTop = 0;
      } else {
        document.documentElement.scrollTop = 0;
      }

      if (window.location.hash !== '#dummy-home') {
        window.history.replaceState(null, null, '#dummy-home');
      }
    };
    scrollToTop();
  }, []);

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
          </ul>
        </div>
        <div className={classes.contactme}>
          <a href='#dummy-contact'>
            <FaMessage className={classes.contactIcon} />
            Contact Me
          </a>
        </div>
      </div>

      <span
        className={isClicked ? classes.cross : classes.bars}
        onClick={() => setIsClicked(!isClicked)}>
        <i className={`fa-solid fa-${isClicked ? 'xmark' : 'bars'}`}></i>
      </span>

      {isClicked && (
        <div className={`${classes.menu} ${isClicked ? 'open' : ''}`}>
          <ul className={classes.links}>
            <li onClick={() => setIsClicked(!isClicked)}>
              <a href='#dummy-home'>Home</a>
            </li>
            <li onClick={() => setIsClicked(!isClicked)}>
              <a href='#dummy-about'>About Me</a>
            </li>
            <li onClick={() => setIsClicked(!isClicked)}>
              <a href='#dummy-skills'>Skills</a>
            </li>
            <li onClick={() => setIsClicked(!isClicked)}>
              <a href='#dummy-projects'>Projects</a>
            </li>
            <li onClick={() => setIsClicked(!isClicked)}>
              <a href='#dummy-contact'>Contact Me</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
