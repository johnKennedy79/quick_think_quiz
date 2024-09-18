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
    <div className="flex flex-col items-center w-14/12 h-100 justify-evenly">
      <form
        action={getQuest}
        className="welcome bg-[#5b2c6f] w-14/12 h-full p-8 flex flex-col items-center justify-evenly"
      >
        <h1 className="text-white">Welcome To The Quiz Zone!</h1>
        <div className="form">
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
        <br />
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
        <br />
        <div>
          <p className="text-white underline">Min - 1 / Max - 45</p>
          <label className="p-4 text-white">Number Of Questions:</label>
          <input
            type="number"
            name="count"
            min="1"
            max="45"
            placeholder="1"
            className="p-2 text-center text-lime-600"
          ></input>
        </div>
        <div>
          <button className="playBtn" tabIndex={0} title="Play">
            Play
          </button>
        </div>
      </form>
    </div>
  );
}
