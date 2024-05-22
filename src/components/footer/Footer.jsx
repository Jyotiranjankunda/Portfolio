import classes from './footer.module.css';
import gmail from '../../assets/gmail.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.socialLinks}>
        <a href='mailto:jrk2001.mymail@gmail.com'>
          <img src={gmail} alt='' />
        </a>
        <a href='https://www.instagram.com/_jyotiranjan_kunda_/' target='_blank'>
          <img src={instagram} alt='' />
        </a>
        <a
          href='https://www.linkedin.com/in/jyotiranjan-kunda-609b47177/'
          target='_blank'>
          <img src={linkedin} alt='' />
        </a>
        <a href='https://github.com/Jyotiranjankunda' target='_blank'>
          <img src={github} alt='' />
        </a>
      </div>
      <p>
        Copyright &copy; {new Date().getFullYear()} Jyotiranjan Kunda. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
