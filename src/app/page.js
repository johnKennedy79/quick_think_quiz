import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <header>
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </header>
      <br />
      <Image
        title="Quick Think Quiz"
        className="think"
        src="/think.png"
        width={300}
        height={300}
        alt="logo"
      />
    </div>
  );
}
