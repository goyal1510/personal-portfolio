/* eslint-disable react/prop-types */
import jayantImage from "../resources/Jayant.jpg";

const About = ({ theme }) => {
  return (
    <div id="about" className={theme}>
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={jayantImage} alt="Jayant" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About <span>Me</span></h1>
            <p>
              I am, Jayant, with a strong foundation in full-stack development, I specialize in Java, JavaScript, React, SQL, and Servlets, building scalable and efficient applications. I hold a B.Tech in Computer Science & Engineering from KIIT University and am currently advancing my expertise in artificial intelligence and machine learning through an M.Tech in Applied AI at VNIT Nagpur.
            </p>
            <p>
            My professional experience includes an internship at HighRadius Technologies, where I designed and implemented REST APIs and developed a full-stack web product, gaining hands-on experience in backend development, frontend integration, and user experience design. Additionally, my role as a Public Relations Intern at Desire Foundation helped me strengthen my communication and teamwork skills while collaborating with diverse communities.
            </p>
            <p>Passionate about problem-solving and continuous learning, I actively enhance my technical skills through platforms like CodeChef and LeetCode, tackling complex challenges and refining my coding expertise.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;