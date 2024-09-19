import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export default async function DataSet4() {
  const user = await currentUser();

  try {
    const getTotalScore = await db.query(
      `SELECT * FROM quiz_score_table WHERE clerk_id = $1`,
      [user.id]
    );
    const totalScoreData = getTotalScore.rows;

    const results = calculateTotalScore(totalScoreData);
    return results;
  } catch (error) {
    "Error fetching data:", error;
    return null;
  }
}
async function calculateTotalScore(totalScoreData) {
  const groupedBySubject = totalScoreData.reduce((acc, item) => {
    const subject = item.subject;
    const score = parseInt(item.score); // Ensure score is a number

    acc[subject] = acc[subject] || {
      subject,
      totalScore: 0,
    };
    acc[subject].totalScore += score;
    return acc;
  }, {});
  const subjectTotals = Object.values(groupedBySubject);

  // Group by subject and difficulty, calculate total score for each combination
  const groupedBySubjectAndDifficulty = totalScoreData.reduce((acc, item) => {
    const subject = item.subject;
    const score = parseInt(item.score);
    const difficulty = item.difficulty;
    const key = `${subject} && ${difficulty}`;
    acc[key] = acc[key] || {
      subject: subject,
      difficulty: difficulty,
      totalScore: 0,
    };
    acc[key].totalScore += score;
    return acc;
  }, {});
  const subjectDifficultyTotals = Object.values(groupedBySubjectAndDifficulty);

  return { subjectTotals, subjectDifficultyTotals };
}
