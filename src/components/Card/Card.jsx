import classes from './card.module.css';

const Card = ({ image, heading, text, sourceCode, project }) => {
  return (
    <div className={classes.card}>
      <img src={image} alt='Image' />
      <div className={classes.content}>
        <h2>{heading}</h2>
        <p>{text}</p>
        <div className={classes.buttons}>
          <a href={sourceCode}>Source Code</a>
          <a href={project}>Project</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
