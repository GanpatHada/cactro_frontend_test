import React, {useState} from "react";
import "./Dashboard.css";
import { IoGridOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { LuRefreshCw, LuTriangleAlert, LuUsersRound } from "react-icons/lu";
import Chart from "react-apexcharts";


const Dashboard = () => {
    const [state, setState] = React.useState( {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ]
    });
    const [donut, setDonut] = React.useState({
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
    })
  return (
    <div id="dashboard-page">
      <main id="hero">
        <header>
          <div className="all-centered">
            <span className="icon">
              <IoGridOutline />
            </span>
            <h2>5</h2>
            <p>Total Projects</p>
          </div>
          <div className="all-centered">
            <span className="icon">
              <SiTicktick />
            </span>
            <h2>1</h2>
            <p>Completing</p>
          </div>
          <div className="all-centered">
            <span className="icon">
              <LuRefreshCw />
            </span>
            <h2>3</h2>
            <p>Ongoing</p>
          </div>
          <div className="all-centered" id="delayed">
            <span className="icon">
              <LuTriangleAlert />
            </span>
            <h2>1</h2>
            <p>Delayed</p>
          </div>
          <div className="all-centered">
            <span className="icon">
              <LuUsersRound />
            </span>
            <h2>5</h2>
            <p>Employees</p>
          </div>
        </header>
        <section id="charts">
        <div id="chart">
        <Chart
              options={state.options}
              series={state.series}
    type="line"
              width="500"
            /></div>

<div className="donut">
        <Chart options={donut.options} series={donut.series} type="donut" width="380" />
      </div>

        </section>
      </main>
      <aside>
        <h2>Team mood</h2>
        <div className="profiles">
          <div className="profile-content">
            <div className="profile-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h4>Maria</h4>
              <p>UX-designer</p>
            </div>
          </div>
          <input type="range" />
        </div>

        <div className="profiles">
          <div className="profile-content">
            <div className="profile-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h4>Andria</h4>
              <p>Backend developer</p>
            </div>
          </div>
          <input type="range" />
        </div>

        <div className="profiles">
          <div className="profile-content">
            <div className="profile-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h4>Alvaro</h4>
              <p>Frontend developer</p>
            </div>
          </div>
          <input type="range" />
        </div>
        <div className="profiles">
          <div className="profile-content">
            <div className="profile-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h4>Juaan</h4>
              <p>Marketing</p>
            </div>
          </div>

          <input type="range" />
        </div>

        <div className="profiles">
          <div className="profile-content">
            <div className="profile-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h4>Jose</h4>
              <p>QA Engineer</p>
            </div>
          </div>
          <input type="range" />
        </div>
      </aside>
      <section id="budget-status">
        <header>
          <ul>
            <li>
              <h1>Budget status</h1>
            </li>
            <li>
              <button>Add new Project</button>
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
        </header>
        <section id="budget-content">
          <div>
            <header>
              <div>
                <h4>Heading</h4>
                <p>Description</p>
              </div>
              <div className="budget-card-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
                  alt=""
                />
              </div>
            </header>
            <main>
                <p>total budget : <strong>70000</strong></p>
                <p>probability : <strong>48211</strong></p>
                <div className="probability-graph"></div>
                <div className="timing">
                    <p>Acutal hours : 451</p>
                    <p>200 sold hours</p>
                </div>
            </main>
          </div>
          <div>
            <header>
              <div>
                <h4>Heading</h4>
                <p>Description</p>
              </div>
              <div className="budget-card-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
                  alt=""
                />
              </div>
            </header>
            <main>
                <p>total budget : <strong>70000</strong></p>
                <p>probability : <strong>48211</strong></p>
                <div className="probability-graph"></div>
                <div className="timing">
                    <p>Acutal hours : 451</p>
                    <p>200 sold hours</p>
                </div>
            </main>
          </div>
          <div>
            <header>
              <div>
                <h4>Heading</h4>
                <p>Description</p>
              </div>
              <div className="budget-card-image">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
                  alt=""
                />
              </div>
            </header>
            <main>
                <p>total budget : <strong>70000</strong></p>
                <p>probability : <strong>48211</strong></p>
                <div className="probability-graph"></div>
                <div className="timing">
                    <p>Acutal hours : 451</p>
                    <p>200 sold hours</p>
                </div>
            </main>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
