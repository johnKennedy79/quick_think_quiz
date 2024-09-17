"use client";
import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, SetSelectedAnswer] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [checked, setChecked] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const questdata = questions[currentQuestion];

  function ChooseAnswer(selected, correctAnswer) {
    setChecked(true);
    if (selected === correctAnswer) {
      SetSelectedAnswer(true);
      console.log("true");
    } else {
      SetSelectedAnswer(false);
      console.log("false");
    }
  }
  function nextQuestion() {
    setResults((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + questdata.points,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
      console.log(results);
    }
    setChecked(false);
  }
  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        checked,
        setChecked,
        showResult,
        setShowResult,
        results,
        setResults,
        currentQuestion,
        setCurrentQuestion,
        nextQuestion,
        ChooseAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
