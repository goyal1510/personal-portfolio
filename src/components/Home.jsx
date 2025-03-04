/* eslint-disable react/prop-types */
import jayantImage from "../resources/Jayant.jpg";
import jayantResume from "../resources/Jayant_Resume.pdf"
const Home = ({ theme }) => {
    return (
      <div id="home" className={theme}>
      <div className="container">
        <div className="header-text">
          <div className="name-img">
            <div className="name">
              <p>WEB DEVELOPER</p>
              <h1>Hi, I&apos;m <span>Jayant</span><br />From India</h1>
              <div className="social-icons">
                <a href="https://github.com/goyal1510" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/jayant-29714220b/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com/goyal151002" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/goyal_1510/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              </div>
              <a href={jayantResume} download className="down-btn">Download CV</a>
            </div>
            <div className="image">
              <img src={jayantImage} alt="Jayant" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;