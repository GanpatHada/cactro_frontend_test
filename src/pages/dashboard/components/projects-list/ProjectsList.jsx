import React from "react";
import "./ProjectsList.css";
import projects from "../../../../data/projects.json";
const ProjectsList = () => {
  return (
    <div id="projects-list">
      <nav>
        <ul>
          <li>
            <h1>Budget status</h1>
          </li>
          <li>
            <button id="add-project-button"> + Add new project</button>
          </li>
          <li>
            <button>Download report</button>
          </li>
          <li>
            <input type="date" />
          </li>
          <li>
            <button>Filter</button>
          </li>
        </ul>
      </nav>
      <div id="projects-list-content">
        {projects.map((project, index) => {
          const timeStatus = (project.soldHours / project.actualHours) * 100;
          return (
            <div key={index}>
              <header>
                <section className="info">
                  <h4>{project.projectTitle}</h4>
                  <p>{project.projectDescription}</p>
                </section>
                <section className="image">
                  <img src={project.imageUrl} alt="" />
                </section>
              </header>
              <main>
                <p>
                  Total Budget : <strong>{project.budget}</strong>
                </p>
                <p>
                  Profitability(100%) : <strong>{project.profitability}</strong>
                </p>
              </main>
              {project.soldHours > project.actualHours ? (
                <div className="status-graph" style={{background:'red'}}></div>
              ) : (
                <div
                  className="status-graph"
                  style={{
                    background: ` linear-gradient(to right, #0098b7 ${timeStatus}%, #cdf7ff ${timeStatus}%) 100%`,
                  }}
                ></div>
              )}

              <div className="timings">
                <p>Actual hours : {project.actualHours}</p>
                <p>Sold hours : {project.soldHours}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
