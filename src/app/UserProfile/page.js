import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { QuizProvider } from "@/context/QuizContext";
import { RadarGraph } from "../components/Radar";

export default async function UserProfile() {
  const user = await currentUser();
  console.log(user);

  const result = await db.query(
    `SELECT * FROM quiz_users WHERE clerk_id = $1`,
    [user.id]
  );

  if (result.rowCount === 0) {
    await db.query(
      `INSERT INTO quiz_users (clerk_id, user_name, avatar) VALUES ($1, $2, $3)`,
      [user.id, user.username, user.imageUrl]
    );

    return (
      <div>
        <Image src={user.imageUrl} alt="User Avatar" width={100} height={100} />
        <p>{user.username.avatar}</p>
      </div>
    );
  }

  return (
    <div className="w-2/3">
      <Image
        src={existingUser.avatar}
        alt="User Avatar"
        width={100}
        height={100}
        className="image"
      />
      <br />
      <p className="user">{existingUser.user_name}</p>
      <div>
        <QuizProvider>
          <RadarGraph />
        </QuizProvider>
      </div>
    </div>
  );
}
