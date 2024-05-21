import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p>
        Copyright &copy; {new Date().getFullYear()} Jyotiranjan Kunda. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
