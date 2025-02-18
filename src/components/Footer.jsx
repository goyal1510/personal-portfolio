/* eslint-disable react/prop-types */

const Footer = ({ theme }) => {
  return (
    <footer className={`footer ${theme}`}>
      <div className="social-icons-2">
        <a href="tel:+919413495328"><i className="fa-solid fa-square-phone"></i></a>
        <a href="mailto:goyal151002@gmail.com"><i className="fas fa-envelope"></i></a>
      </div>
    </footer>
  );
};

export default Footer;