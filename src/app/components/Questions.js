"use client";
import { QuizContext } from "@/context/QuizContext";
import { useContext, useEffect, useState } from "react";

export default function Questions({ quizQuestions }) {
  const {
    activeQuestion,
    setActiveQuestion,
    questions,
    setQuestions,
    score,
    increaseScore,
    currentQuestion,
    nextQuestion,
    chooseAnswer,
  } = useContext(QuizContext);

  useEffect(function () {
    setQuestions(quizQuestions);
  }, []);

  return (
    <div className="h-3/6 w-10/12">
      <p>
        {currentQuestion + 1}/{questions.length}
      </p>
      <p className="quest">Number Of Correct Answers: {score}</p>
      <h1>{questions[currentQuestion]?.question}</h1>
      <div className="flex flex-col">
        <button
          onClick={() =>
            chooseAnswer(
              questions[currentQuestion]?.answer_1,
              questions[currentQuestion]?.correct_answer
            )
          }
        >
          {questions[currentQuestion]?.answer_1}
        </button>
        <button
          onClick={() =>
            chooseAnswer(
              questions[currentQuestion]?.answer_2,
              questions[currentQuestion]?.correct_answer
            )
          }
        >
          {questions[currentQuestion]?.answer_2}
        </button>
        <button
          onClick={() =>
            chooseAnswer(
              questions[currentQuestion]?.answer_3,
              questions[currentQuestion]?.correct_answer
            )
          }
        >
          {questions[currentQuestion]?.answer_3}
        </button>
        <button
          onClick={() =>
            chooseAnswer(
              questions[currentQuestion]?.answer_4,
              questions[currentQuestion]?.correct_answer
            )
          }
        >
          {questions[currentQuestion]?.answer_4}
        </button>
      </div>
    </div>
  );
}
