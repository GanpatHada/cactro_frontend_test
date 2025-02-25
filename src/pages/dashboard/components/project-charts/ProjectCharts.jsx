import React from "react";
import Chart from "react-apexcharts";
import "./ProjectCharts.css";

const LineChart = () => {
  const categories = ["19 June", "20 June", "21 June", "22 June", "23 June", "24 June", "25 June"];
  const weeklyData = [1000, 3000, 4000, 3800, 5000, 6200, 7000];
  const [state, setState] = React.useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: { show: false },
      },
      xaxis: {
        categories,
       
      },
    },
    series:[{
      name:"Revenue",
      data:weeklyData
    }]
  });
  return (
    <div id="line-chart">
      <header>
        <h3>Total Revenue</h3>
        <div>
          <p>Month</p>
          <label htmlFor="week">
            <input type="checkbox" />
            week
          </label>
        </div>
      </header>
      <div className="chart-wrapper">
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          
        />
      </div>
    </div>
  );
};

const DonutChart = () => {
  const [donut, setDonut] = React.useState({
    series: [19, 33, 48],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Over budget", "On Budget", "UnderBudget"],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
      },
    },
  });

  return (
    <div id="donut-chart">
      <header>
        <h3>Budget</h3>
        <div>
          <p>Profitablility</p>
          <label htmlFor="status">
            <input type="checkbox" />
            status
          </label>
        </div>
      </header>
      <div className="chart-wrapper">
        <Chart options={donut.options} series={donut.series} type="donut" />
      </div>
    </div>
  );
};

const ProjectCharts = () => {
  return (
    <section id="charts">
      <LineChart />
      <DonutChart />
    </section>
  );
};

export default ProjectCharts;
