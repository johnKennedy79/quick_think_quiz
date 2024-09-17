import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function QuizOptions() {
  const allSubjects = await db.query(`
    SELECT * FROM quiz_subjects`);
  const subjects = allSubjects.rows;

  const allDifficulties = await db.query(`
    SELECT * FROM quiz_difficulty`);
  const difficulties = allDifficulties.rows;

  async function getQuest(formData) {
    "use server";
    const questSubject = formData.get("subject");
    const questDifficulty = formData.get("difficulty");
    const questCount = formData.get("count");
    redirect(
      `/start?subject=${questSubject}&difficulty=${questDifficulty}&limit=${questCount}`
    );
  }
  return (
    <div className="flex flex-col items-center w-11/12 m-16 h-96 justify-evenly">
      <form
        action={getQuest}
        className="bg-[#5b2c6f] w-10/12 h-full p-8 flex flex-col items-center justify-evenly"
      >
        <div>
          <label className="p-4 text-white">Select a Subject:</label>
          <select name="subject" required>
            <option className="p-8 text-center">Subjects</option>
            {subjects.map((subject) => {
              return (
                <option
                  key={subject.id}
                  value={subject.subject}
                  className="p-8 text-center"
                >
                  {subject.subject}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label className="p-4 text-white">Select A Difficulty:</label>
          <select name="difficulty" required>
            <option className="p-8 text-center">Levels</option>
            {difficulties.map((difficulty) => {
              return (
                <option
                  key={difficulty.id}
                  value={difficulty.difficulty}
                  className="p-8 text-center"
                >
                  {difficulty.difficulty}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label className="p-4 text-white">Number Of Questions:</label>
          <input
            type="number"
            name="count"
            min="1"
            max="45"
            placeholder="min 1 - max 45"
            className="p-2 text-center"
          ></input>
        </div>
        <div>
          <button className="playBtn">Play</button>
        </div>
      </form>
    </div>
  );
}
