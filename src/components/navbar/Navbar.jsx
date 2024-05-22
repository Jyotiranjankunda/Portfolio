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

      if (window.location.hash !== '#Home') {
        window.history.replaceState(null, null, '#Home');
      }
    };
    scrollToTop();
  }, []);

  return (
    <>
      <div className={classes.navbar} id='navbar'>
        <a href='#Home'>
          <img src={dp} alt='DP' className={classes.dp} />
        </a>
        <div className={classes.navlinks}>
          <ul className={classes.links}>
            <li>
              <a href='#Home'>Home</a>
            </li>
            <li>
              <a href='#About'>About Me</a>
            </li>
            <li>
              <a href='#Skills'>Skills</a>
            </li>
            <li>
              <a href='#Projects'>Projects</a>
            </li>
          </ul>
        </div>
        <div className={classes.contactme}>
          <a href='#Contact'>
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
              <a href='#Home'>Home</a>
            </li>
            <li onClick={() => setIsClicked(!isClicked)}>
              <a href='#About'>About Me</a>
            </li>
            <li onClick={() => setIsClicked(!isClicked)}>
              <a href='#Skills'>Skills</a>
            </li>
            <li onClick={() => setIsClicked(!isClicked)}>
              <a href='#Projects'>Projects</a>
            </li>
            <li onClick={() => setIsClicked(!isClicked)}>
              <a href='#Contact'>Contact Me</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
