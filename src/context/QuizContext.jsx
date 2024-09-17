"use client";
import { createContext, useReducer, useState } from "react";

const initialState = {};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [checked, setChecked] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState({
    score: 0,
    correctAnswer: 0,
    wrongAnswers: 0,
  });

  function increaseScore() {
    setScore(score + 1);
  }
  function nextQuestion() {
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
    }
  }
  function chooseAnswer(selected, correctAnswer) {
    if (selected === correctAnswer) {
      increaseScore();
    }
    nextQuestion();
  }
  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        score,
        increaseScore,
        currentQuestion,
        nextQuestion,
        chooseAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
