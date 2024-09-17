import { db } from "@/lib/db";
import Questions from "../components/Questions";
import { QuizProvider } from "@/context/QuizContext";

export default async function Quiz({ searchParams }) {
  const quizData = await db.query(
    `SELECT * FROM quiz_questions 
          WHERE subject = $1 AND difficulty = $2 ORDER BY RANDOM()
          LIMIT $3`,
    [searchParams.subject, searchParams.difficulty, searchParams.limit]
  );
  const quizQuestions = quizData.rows;
  return (
    <div>
      <QuizProvider>
        <Questions quizQuestions={quizQuestions} />
      </QuizProvider>
    </div>
  );
}
