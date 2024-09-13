import { db } from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  return (
    <Image
      className="think"
      src="/think.png"
      width={200}
      height={200}
      alt="logo"
    />
  );
}

//  const result = await db.query(
//   `SELECT * FROM quiz_questions ORDER BY id ASC `
// );
// const quests = result.rows;
{
  /* <div className="flex flex-col items-center"> */
}
// {quests.map((quest) => {
//   return (
//     // <div
//     //   key={quest.id}
//     //   className="w-9/12 border-double mt-4 border-[#cd950c] border-4 p-2 outline-4 bg-[#002349] text-[#e8e5c3]"
//     // >
//     //   <p>
//     //     {quest.id} / {quests.length}
//     //   </p>
//     //   <h2>{quest.question}</h2>
//     //   <p>{quest.answer_1}</p>
//     //   <p>{quest.answer_2}</p>
//     //   <p>{quest.answer_3}</p>
//     //   <p>{quest.answer_4}</p>
//     // </div>
//   );
// })}
