/* eslint-disable react/prop-types */
const Skills = ({ theme }) => {
  return (
    <div id="skills" className={theme}>
      <h1>My <span>Skills</span></h1>
      <div className="skills-section">
        <div className="technical-skills">
          <h2>Technical Skills</h2>
          <div className="skill">
            <div className="skilltitle">
              <p>HTML & CSS</p>
              <span className="progress-text">85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="skilltitle">
              <p>HTML & CSS</p>
              <span className="progress-text">85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="skilltitle">
              <p>HTML & CSS</p>
              <span className="progress-text">85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="skilltitle">
              <p>HTML & CSS</p>
              <span className="progress-text">85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <div className="skilltitle">
              <p>HTML & CSS</p>
              <span className="progress-text">85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          {/* Add more skills here */}
        </div>
        <div className="non-technical-skills">
          <h2>Non-Technical Skills</h2>
          <div className="circle-container">
            <div className="circle">
              <div className="circle-inner" style={{ background: 'conic-gradient(#ff004f 80%, #555 0)' }}>
                <div className="circle-text">80%</div>
              </div>
              <p>Team Work</p>
            </div>
            <div className="circle">
              <div className="circle-inner" style={{ background: 'conic-gradient(#ff004f 80%, #555 0)' }}>
                <div className="circle-text">80%</div>
              </div>
              <p>Team Work</p>
            </div>
            <div className="circle">
              <div className="circle-inner" style={{ background: 'conic-gradient(#ff004f 80%, #555 0)' }}>
                <div className="circle-text">80%</div>
              </div>
              <p>Team Work</p>
            </div>
            <div className="circle">
              <div className="circle-inner" style={{ background: 'conic-gradient(#ff004f 80%, #555 0)' }}>
                <div className="circle-text">80%</div>
              </div>
              <p>Team Work</p>
            </div>
            {/* Add more non-technical skills here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;