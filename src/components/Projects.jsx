import work1 from "../resources/ProjectImages/work-1.png";
import work2 from "../resources/ProjectImages/work-2.png";
import work3 from "../resources/ProjectImages/work-3.png";
import work4 from "../resources/ProjectImages/work-4.png";
import work5 from "../resources/ProjectImages/work-5.png";
import work6 from "../resources/ProjectImages/work-6.png";
/* eslint-disable react/prop-types */
const projectsData = [
  {
    name: "Custom Drag & Drop Calculator",
    description: "A calculator builder with drag-and-drop functionality, Zustand state management, and Tailwind CSS.",
    image:work1,
    githubLink: "https://github.com/goyal1510/custom-drag-drop-calculator", 
    livePreview: "https://custom-drag-drop-calculator.vercel.app/",
  },
  {
    name: "Game Hub",
    description: "A gaming platform where users can explore and play various games.",
    image: work2,
    githubLink: "https://github.com/goyal1510/game-hub",
    livePreview: "https://game-hub-five-plum.vercel.app/",
  },
  {
    name: "Jayant E-Commerce Website",
    description: "A full-stack e-commerce platform with authentication, cart functionality, and product management.",
    image: work3,
    githubLink: "https://github.com/goyal1510/jayant-ecommerce-website",
    livePreview: "https://jayant-ecommerce-website.vercel.app/",
  },
  {
    name: "Jayant Weather App",
    description: "A weather forecasting application that provides real-time weather updates.",
    image: work4,
    githubLink: "https://github.com/goyal1510/jayant-weather-app",
    livePreview: "https://github.com/goyal1510/jayant-weather-app",
  },
  {
    name: "Youtube Clone",
    description: "A clone of the YouTube website with video playback and search functionality.",
    image: work5,
    githubLink: "https://github.com/goyal1510/youtube-clone",
    livePreview: "#",
  },
  {
    name: "To-Do App",
    description: "A task management app for creating, updating, and tracking to-do lists.",
    image: work6,
    githubLink: "https://github.com/goyal1510/todo-app",
    livePreview: "https://github.com/goyal1510/todo-app",
  },
];

const Projects = ({ theme }) => {
  return (
    <div id="projects" className={theme}>
      <div className="container">
        <h1 className="sub-title">
          My <span>Projects</span>
        </h1>
        <div className="work-list">
          {projectsData.map((project, index) => (
            <div className="work" key={index}>
              <img src={project.image} alt={project.name} />
              <div className="layer">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="icons">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href={project.livePreview} target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
