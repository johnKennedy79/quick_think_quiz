"use client";
import { QuizContext } from "@/context/QuizContext";
import { useContext, useEffect, useState } from "react";
import { Results } from "./results";
export default function Questions({ quizQuestions }) {
  const {
    questions,
    setQuestions,
    checked,
    showResult,
    results,
    currentQuestion,
    nextQuestion,
    ChooseAnswer,
  } = useContext(QuizContext);

  useEffect(function () {
    setQuestions(quizQuestions);
  }, []);
  console.log(quizQuestions);
  return (
    <div className="w-10/12 h-3/6">
      <p>
        {currentQuestion + 1}/{questions.length}
      </p>
      {!showResult ? (
        <div>
          <h1>{questions[currentQuestion]?.question}</h1>
          <div className="flex flex-col">
            <button
              onClick={() =>
                ChooseAnswer(
                  questions[currentQuestion]?.answer_1,
                  questions[currentQuestion]?.correct_answer
                )
              }
            >
              {questions[currentQuestion]?.answer_1}
            </button>
            <button
              onClick={() =>
                ChooseAnswer(
                  questions[currentQuestion]?.answer_2,
                  questions[currentQuestion]?.correct_answer
                )
              }
            >
              {questions[currentQuestion]?.answer_2}
            </button>
            <button
              onClick={() =>
                ChooseAnswer(
                  questions[currentQuestion]?.answer_3,
                  questions[currentQuestion]?.correct_answer
                )
              }
            >
              {questions[currentQuestion]?.answer_3}
            </button>
            <button
              onClick={() =>
                ChooseAnswer(
                  questions[currentQuestion]?.answer_4,
                  questions[currentQuestion]?.correct_answer
                )
              }
            >
              {questions[currentQuestion]?.answer_4}
            </button>
            {checked ? (
              <button onClick={nextQuestion}>
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled>
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h1>Results</h1>
          <h2>Overall {(results.correctAnswers / questions.length) * 100}%</h2>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{results.score}</span>
          </p>
          <p>
            Correct Answers: <span>{results.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{results.wrongAnswers}</span>
          </p>
          <button onClick={() => window.location.reload()}>
            Restart quiz with the same settings
          </button>
          {/* <button onClick={Results(results, questions)}>End Game</button> */}
        </div>
      )}
    </div>
  );
}
