import classes from './home.module.css';
import gmail from '../../assets/gmail.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import ParticlesPage from '../../pages/ParticlesPage';
import { Typewriter } from 'react-simple-typewriter';
import photo from "../../assets/photo.png";

const Home = () => {
  return (
    <>
      <ParticlesPage />
      <div className={classes.dummy} id='dummy-home'></div>
      <div className={classes.home} id='home'>
        <div className={classes.socialLinks}>
          <a href='mailto:jrk2001.mymail@gmail.com'>
            <img src={gmail} alt='' />
          </a>
          <a href='https://www.instagram.com/_jyotiranjan_kunda_/'>
            <img src={instagram} alt='' />
          </a>
          <a href='https://www.linkedin.com/in/jyotiranjan-kunda-609b47177/'>
            <img src={linkedin} alt='' />
          </a>
          <a href='https://github.com/Jyotiranjankunda'>
            <img src={github} alt='' />
          </a>
        </div>
        <div className={classes.info}>
          <p className={classes.name}>
            Hi, I am <span>Jyotiranjan Kunda</span>
          </p>
          <p className={classes.typewriter}>
            <Typewriter
              words={['MERN Stack Developer', 'UI/UX Designer', 'Competitive Programmer']}
              cursor={true}
              loop={0}
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
              cursorColor='#005249'
            />
          </p>
          <p className={classes.tagline}>
            Passionate Coder | Building the Future with Every Line of Code
          </p>
          <a
            href='https://drive.google.com/uc?export=download&id=1YG7xKvIQbHHC5je46g_JXGwzbpSXSqfj'
            download
            className={classes.button}>
            Download my CV
          </a>
        </div>
        <div className={classes.photo}>
          <img src={photo} alt='' className={classes.image} />
        </div>
      </div>
    </>
  );
};

export default Home;
