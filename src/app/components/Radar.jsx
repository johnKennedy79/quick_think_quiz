"use client";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);
export const RadarGraph = () => {
  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        // suggestedMax: 500,
      },
    },
  };

  const data = {
    labels: [
      "Science and Nature",
      "General Knowledge",
      "Entertainment Video Games",
      "Entertainment Film",
    ],
    datasets: [
      {
        label: "Easy",
        data: [65, 59, 90, 81],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Medium",
        data: [40, 20, 30, 10],
        fill: true,
        backgroundColor: "rgba(180, 99, 132, 0.2)",
        borderColor: "green",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Hard",
        data: [28, 40, 19, 27],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
      {
        label: "Total",
        data: [133, 119, 139, 118],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "#5b2c6f",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#5b2c6f",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };
  return (
    <div className="w-full h-full">
      <h1>Your Scores (sample)</h1>
      <Radar options={options} data={data} />
    </div>
  );
};
