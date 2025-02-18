/* eslint-disable react/prop-types */
const Contact = ({ theme }) => {
  return (
    <div id="contact" className={theme}>
      <h1 className="sub-title-contact">Contact <span>Me</span></h1>
      <div className="container">
        <div className="contact-right">
          <form action="https://api.web3forms.com/submit" method="post">
            <input type="hidden" name="access_key" value="8b5c545b-75da-4b50-ae54-6e49852aa6b6" />
            <input placeholder="Your name" name="name" type="text" tabIndex="1" required />
            <input placeholder="Your Email Address" type="email" tabIndex="2" name="email" required />
            <textarea placeholder="Type your message here...." tabIndex="5" rows="5" name="text" required></textarea>
            <button type="submit" className="form-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;