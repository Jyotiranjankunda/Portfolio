import classes from './home.module.css';
import gmail from '../../assets/gmail.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import bg from '../../assets/bg.png';

const Home = () => {
  return (
    <div className={classes.home} id="home">
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
        <h1>
          Hi! I am <span>Jyotiranjan Kunda</span>
        </h1>
        <h2>Full Stack Developer</h2>
        <h3>Passionate Coder | Building the Future with Every Line of Code</h3>
        <a
          href='https://drive.google.com/uc?export=download&id=1YG7xKvIQbHHC5je46g_JXGwzbpSXSqfj'
          download>
          Download my CV
        </a>
      </div>
      <div className={classes.photo}>
        <img src={bg} alt="" className={classes.image} />
      </div>
      <div className={classes.scroll}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <span className={classes.scrollIndicator} key={item}></span>
        ))}
      </div>
    </div>
  );
};

export default Home;
