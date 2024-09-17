import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export function Results(results, questions) {
  async function SaveResults(results, questions) {
    "use server";
    const user = currentUser();
    console.log(user);
    const saveResults = await db.query(
      `
        INSERT INTO quiz_table_score 
        (clerk_id, timestamp, subject, difficulty, score, no_questions, correctAnswers, wrong_answers) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        user.id,
        now(),
        questions.subject,
        questions.difficulty,
        results.score,
        questions.length,
        results.correctAnswers,
        results.wrongAnswers,
      ]
    );
    console.log(saveResults);
  }
  redirect("/play");
}
