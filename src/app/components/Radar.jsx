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
  ArcElement,
} from "chart.js";
import { useState } from "react";
ChartJS.register(
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const RadarGraph = ({ dataSet }) => {
  const options = {
    scales: {
      r: {
        grid: {
          color: "red",
          circular: true,
        },
        angleLines: {
          color: "red",
          display: true,
        },
      },
    },
  };
  const labelsSet = [
    "Science and Nature",
    "General Knowledge",
    "Entertainment Video Games",
    "Entertainment Film",
  ];

  function totalData() {
    const scores = dataSet.subjectTotals;
    const subjects = labelsSet;
    const totalData = [];
    for (let i = 0; i < subjects.length; i++) {
      let score = 0;
      for (let j = 0; j < scores.length; j++) {
        if (subjects[i] == scores[j].subject) {
          score = scores[j].totalScore;
        }
      }
      totalData.push(score);
    }
    return totalData;
  }

  function totalDataEasy() {
    const scores = dataSet.subjectDifficultyTotals;
    const subjects = labelsSet;
    const totalData = [];
    for (let i = 0; i < subjects.length; i++) {
      let score = 0;
      for (let j = 0; j < scores.length; j++) {
        // check difficulty
        if (
          subjects[i] === scores[j].subject &&
          scores[j].difficulty === "Easy"
        ) {
          score = scores[j].totalScore;
        }
      }
      totalData.push(score);
    }
    return totalData;
  }

  function totalDataMedium() {
    const scores = dataSet.subjectDifficultyTotals;
    const subjects = labelsSet;
    const totalData = [];
    for (let i = 0; i < subjects.length; i++) {
      let score = 0;
      for (let j = 0; j < scores.length; j++) {
        // check difficulty
        if (
          subjects[i] === scores[j].subject &&
          scores[j].difficulty === "Medium"
        ) {
          score = scores[j].totalScore;
        }
      }
      totalData.push(score);
    }
    return totalData;
  }
  function totalDataHard() {
    const scores = dataSet.subjectDifficultyTotals;
    const subjects = labelsSet;
    const totalData = [];
    for (let i = 0; i < subjects.length; i++) {
      let score = 0;
      for (let j = 0; j < scores.length; j++) {
        // check difficulty
        if (
          subjects[i] === scores[j].subject &&
          scores[j].difficulty === "Hard"
        ) {
          score = scores[j].totalScore;
        }
      }
      totalData.push(score);
    }
    return totalData;
  }

  const data = {
    labels: labelsSet,
    datasets: [
      {
        label: "Easy",
        data: totalDataEasy(),
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
        data: totalDataMedium(),
        fill: true,
        backgroundColor: "rgba(19, 180, 21, 0.2)",
        borderColor: "rgb(19, 180, 21)",
        pointBackgroundColor: "rgb(19, 180, 21)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Hard",
        data: totalDataHard(),
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
        data: totalData(),
        fill: true,
        backgroundColor: "rgba(91, 44, 111, 0.2)",
        borderColor: "#5b2c6f",
        pointBackgroundColor: "rgb(91, 44, 111)",
        pointBorderColor: "#5b2c6f",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  return (
    <div>
      <h1 className="text-center">Your Scores</h1>
      <Radar options={options} data={data} />
    </div>
  );
};
