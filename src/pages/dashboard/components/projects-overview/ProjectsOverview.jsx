import React from "react";
import { IoGridOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { LuRefreshCw, LuTriangleAlert, LuUsersRound } from "react-icons/lu";
import "./ProjectsOverview.css";
import projects from "../../../../data/projects.json";
import employees from "../../../../data/employees-mood.json";

const { totalProjects, completed, ongoing, delayed } = projects.reduce(
  (acc, cur) => {
    acc.totalProjects += 1;
    if (cur.status === "COMPLETED") acc.completed += 1;
    if (cur.status === "ONGOING") acc.ongoing += 1;
    if (cur.status === "DELAYED") acc.delayed += 1;
    return acc;
  },
  { totalProjects: 0, completed: 0, ongoing: 0, delayed: 0 }
);

const TotalProjects = () => {
  return (
    <div className="all-centered">
      <span className="icon">
        <IoGridOutline />
      </span>
      <h2>{totalProjects}</h2>
      <p>Total Projects</p>
    </div>
  );
};
const CompleatedProjects = () => {
  return (
    <div className="all-centered">
      <span className="icon">
        <SiTicktick />
      </span>
      <h2>{completed}</h2>
      <p>Completed</p>
    </div>
  );
};
const OngoingProjects = () => {
  return (
    <div className="all-centered">
      <span className="icon">
        <LuRefreshCw />
      </span>
      <h2>{ongoing}</h2>
      <p>Ongoing</p>
    </div>
  );
};

const DelayedProjects = () => {
  return (
    <div className="all-centered" id="delayed-projects-box">
      <span className="icon">
        <LuTriangleAlert />
      </span>
      <h2>{delayed}</h2>
      <p>Delayed</p>
    </div>
  );
};

const TotalEmployees = () => {
  return (
    <div className="all-centered">
      <span className="icon">
        <LuUsersRound />
      </span>
      <h2>{employees.length}</h2>
      <p>Employees</p>
    </div>
  );
};

const ProjectsOverview = () => {
  return (
    <header id="projects-overview">
      <TotalProjects />
      <CompleatedProjects />
      <OngoingProjects />
      <DelayedProjects />
      <TotalEmployees />
    </header>
  );
};

export default ProjectsOverview;
