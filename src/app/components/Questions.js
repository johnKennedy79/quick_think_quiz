"use client";
import { QuizContext } from "@/context/QuizContext";
import { useContext, useEffect } from "react";
import ResultBtn from "./results";
import Image from "next/image";
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
  // console.log(questions);
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

            <button onClick={nextQuestion} disabled={!checked}>
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Results</h1>
          <Image
            title="Quiz results trophy"
            className="think"
            src="/trophy.png"
            width={200}
            height={200}
            alt="Trophy"
          />
          <h2>
            Overall
            {Math.round((results.correctAnswers / questions.length) * 100)}%
          </h2>
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
