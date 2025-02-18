/* eslint-disable react/prop-types */
const About = ({ theme }) => {
  return (
    <div id="about" className={theme}>
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="./resources/Jayant.jpg" alt="Jayant" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About <span>Me</span></h1>
            <p>
              I am, Jayant, a motivated and inquisitive individual with a strong foundation in computer
              science and engineering, currently pursuing a B.Tech. degree from Kalinga Institute of Industrial
              Technology. My journey in the tech field has been marked by diverse experiences, including a
              significant role as a Java Backend Intern at HighRadius Technologies. During my tenure, I
              designed and implemented REST APIs, which enhanced my proficiency in Java, SQL, Hibernate,
              Struts, and Spring. I also contributed to developing a FinTech B2B management application,
              demonstrating my ability to integrate technical skills with practical business solutions.
            </p>
            <p>
              In addition to my technical expertise, I have a solid background in business development,
              having managed a team of event coordinators and campus representatives during my internship at
              NiiT. This role sharpened my leadership and organizational skills and provided valuable insights
              into client and project management.
            </p>
            <button className="about-btn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;