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


