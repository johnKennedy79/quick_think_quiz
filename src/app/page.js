import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <br />
      <Image
        title="Quick Think Quiz"
        className="think"
        src="/think.png"
        width={200}
        height={200}
        alt="logo"
      />
    </div>
  );
}
