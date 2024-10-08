"use client";
import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [myData, setMyData] = useState([]);
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
    } else {
      SetSelectedAnswer(false);
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
    }
    setChecked(false);
  }
  return (
    <QuizContext.Provider
      value={{
        myData,
        setMyData,
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
