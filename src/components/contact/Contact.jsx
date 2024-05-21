import classes from './contact.module.css';
import contactme from '../../assets/contactme.png';

const Contact = () => {
  return (
    <>
      <div className={classes.dummy} id='dummy-contact'></div>
      <div className={classes.contact} id='contact'>
        <h2 className={classes.heading}>Contact Me</h2>
        <div className={classes.left}>
          <img src={contactme} alt='' />
        </div>
        <div className={classes.right}>
          <form
            action='https://formspree.io/f/mpzvepaz'
            method='POST'
            className={classes.form}>
            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' required />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' required />
            </div>
            <div>
              <label htmlFor='subject'>Subject</label>
              <input type='text' name='subject' id='subject' />
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                id='message'
                placeholder='Write your message here'></textarea>
            </div>
            <button type='submit' className={classes.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
