import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { QuizProvider } from "@/context/QuizContext";
import ResultsChart from "../components/Results_Chart";
import { RadarGraph } from "../components/Radar";

// import { revalidatePath } from "next/cache";

export default async function UserProfile() {
  const user = await currentUser(); // this is logged in user
  // console.log(user);

  // Check if the user already exists in the database
  const result = await db.query(
    `SELECT * FROM quiz_users WHERE clerk_id = $1`,
    [user.id]
  );

  // If user is not found, insert a new user profile into the database
  if (result.rowCount === 0) {
    await db.query(
      `INSERT INTO quiz_users (clerk_id, user_name, avatar) VALUES ($1, $2, $3)`,
      [user.id, user.username, user.imageUrl]
    );
    // console.log("user.id, user.username, avatar");

    return (
      <div>
        <Image src={user.imageUrl} alt="User Avatar" width={100} height={100} />
        <p>{user.username.avatar}</p>
      </div>
    );
  }

  const existingUser = result.rows[0];
  const data = await db.query(
    `SELECT * FROM quiz_score_table WHERE clerk_id = $1`,
    [existingUser.clerk_id]
  );
  const chartData = data.rows;
  // console.log(chartData);
  return (
    <div className="w-2/3">
      <h2>User Profile</h2>
      <Image
        src={existingUser.avatar}
        alt="User Avatar"
        width={100}
        height={100}
      />
      <p>{existingUser.user_name}</p>
      <div className="w-11/12">
        <QuizProvider>
          {/* <ResultsChart chartData={chartData} /> */}
          <RadarGraph />
        </QuizProvider>
      </div>
    </div>
  );
}

// import image from next
// make an image Element - which needs a SRC which is existing user.avatar. alt (add width and height)
// set up - next.config file - package json
// add any styling
