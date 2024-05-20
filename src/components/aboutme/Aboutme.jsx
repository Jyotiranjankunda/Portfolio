import classes from './aboutme.module.css';

const Aboutme = () => {
  return (
    <>
      <div className={classes.dummy} id='dummy-about'></div>
      <div className={classes.aboutme} id='aboutme'>
        <p className={classes.whoami}>
          <p>WHO AM I ?</p>
        </p>
        <p className={classes.heading}>About Me</p>
        <p>
        Hello! I&apos;m Jyotiranjan Kunda, a passionate software engineer with a knack for problem-solving and innovation. 🚀 Proficient in languages like C/C++, Java, and JavaScript, I enjoy crafting seamless user experiences and optimizing performance. With a strong academic background and a penchant for continuous learning, I excel in various tech stacks and developer tools. Beyond coding, I'm an avid traveler 🌍, fitness enthusiast 💪, and always on a path of self-improvement 📈. Let's connect and explore new possibilities together! 🚀
        </p>
      </div>
    </>
  );
};

export default Aboutme;
