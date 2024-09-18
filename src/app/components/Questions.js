"use client";
import { QuizContext } from "@/context/QuizContext";
import { useContext, useEffect, useState } from "react";
import ResultBtn from "./results";
export default function Questions({ quizQuestions, addResults, userId }) {
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
  // console.log(quizQuestions);
  return (
    <div className="w-9/11 h-3/6">
      <p className="currentquestion">
        {currentQuestion + 1}/{questions.length}
      </p>
      {!showResult ? (
        <div>
          <h1 className="question">{questions[currentQuestion]?.question}</h1>
          <div className="flex flex-col">
            <button
              className="questone"
              onClick={() =>
                ChooseAnswer(
                  questions[currentQuestion]?.answer_1,
                  questions[currentQuestion]?.correct_answer
                )
              }
            >
              {questions[currentQuestion]?.answer_1}
            </button>
            <br />
            <button
              className="questone"
              onClick={() =>
                ChooseAnswer(
                  questions[currentQuestion]?.answer_2,
                  questions[currentQuestion]?.correct_answer
                )
              }
            >
              {questions[currentQuestion]?.answer_2}
            </button>
            <br />
            <button
              className="questone"
              onClick={() =>
                ChooseAnswer(
                  questions[currentQuestion]?.answer_3,
                  questions[currentQuestion]?.correct_answer
                )
              }
            >
              {questions[currentQuestion]?.answer_3}
            </button>
            <br />
            <button
              className="questone"
              onClick={() =>
                ChooseAnswer(
                  questions[currentQuestion]?.answer_4,
                  questions[currentQuestion]?.correct_answer
                )
              }
            >
              {questions[currentQuestion]?.answer_4}
            </button>
            <br />
            <button
              className="questone"
              onClick={nextQuestion}
              disabled={!checked}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
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
          <ResultBtn
            results={results}
            questions={questions}
            addResults={addResults}
            userId={userId}
          />
        </div>
      )}
    </div>
  );
}
