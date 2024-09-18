"use server";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
export async function addResults(questions, results, userId) {
  console.log(questions);
  const saveResults = await db.query(
    `
        INSERT INTO quiz_score_table
        (clerk_id, subject, difficulty, score, no_questions, correct_answers, wrong_answers) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
      userId,
      questions[0].subject,
      questions[0].difficulty,
      results.score,
      questions.length,
      results.correctAnswers,
      results.wrongAnswers,
    ]
  );
  //   console.log(saveResults);
  redirect("/Play");
}
