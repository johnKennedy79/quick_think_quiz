"use client";
import { QuizContext } from "@/context/QuizContext";
import { useContext, useEffect } from "react";
import { Chart as ChartJS, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";

export default function ResultsChart({ chartData }) {
  ChartJS.register(BarElement);
  const { myData, setMyData } = useContext(QuizContext);
  // console.log(chartData);

  useEffect(function () {
    setMyData(chartData);
  }, []);
  // console.log(myData);

  const labels = [
    "Science and Nature",
    "General Knowledge",
    "Entertainment Video Games",
    "Entertainment Film",
  ];
  let data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels?.map(() => {
          chartData?.points;
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
      },
    ],
  };
  let options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };
  return (
    <div>
      <Bar data={{ data }} height={400} options={{ options }} />
    </div>
  );
}
