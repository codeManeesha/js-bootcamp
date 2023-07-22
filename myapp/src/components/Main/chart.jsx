
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import style from "./chart.module.css"

const BarChart = () => {
  const labels = [10,30,40,50,60];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Employer :K 52,500",
        backgroundColor: "rgba(160, 129, 232, 0.8) ",
        borderColor: "rgb(255, 99, 132)",
        data: [50,100,200,300,400,500],
      },
    ],
  };
  return (
    <div className={style.graph} >
      <Bar data={data} />
    </div>
  );
};
export default BarChart;