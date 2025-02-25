import React from "react";
import "./Dashboard.css";
import EmployeesMood from "./components/employee-mood/EmployeesMood";
import ProjectsOverview from "./components/projects-overview/ProjectsOverview";
import ProjectCharts from "./components/project-charts/ProjectCharts";
import ProjectsList from "./components/projects-list/ProjectsList";

const Dashboard = () => {

  return (
    <div id="dashboard-page">
      <main id="hero">
        <ProjectsOverview />
        <ProjectCharts/>
      </main>
      <EmployeesMood />
      <ProjectsList/>
    </div>
  );
};

export default Dashboard;
