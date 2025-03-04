/* eslint-disable react/prop-types */
const Skills = ({ theme }) => {
  const technicalSkills = [
    { name: "HTML & CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React.js", level: "75%" },
    { name: "Node.js", level: "70%" },
    { name: "Express.js", level: "70%" },
    { name: "MongoDB", level: "65%" },
    { name: "Java", level: "75%" },
    { name: "C++", level: "70%" },
  ];

  const nonTechnicalSkills = [
    { name: "Team Work", level: "80%" },
    { name: "Communication", level: "85%" },
    { name: "Problem Solving", level: "75%" },
    { name: "Time Management", level: "70%" },
    { name: "Leadership", level: "80%" },
    { name: "Adaptability", level: "85%" },
  ];

  return (
    <div id="skills" className={theme}>
      <h1>
        My <span>Skills</span>
      </h1>
      <div className="skills-section">
        {/* Technical Skills Section */}
        <div className="technical-skills">
          <h2>Technical Skills</h2>
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skilltitle">
                <p>{skill.name}</p>
                <span className="progress-text">{skill.level}</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Non-Technical Skills Section */}
        <div className="non-technical-skills">
          <h2>Non-Technical Skills</h2>
          <div className="circle-container">
            {nonTechnicalSkills.map((skill, index) => (
              <div key={index} className="circle">
                <div
                  className="circle-inner"
                  style={{
                    background: `conic-gradient(#ff004f ${skill.level}, #555 0)`,
                  }}
                >
                  <div className="circle-text">{skill.level}</div>
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
