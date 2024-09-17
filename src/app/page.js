import Image from "next/image";

export default async function Home() {
  return (
    <div className="homePage">
      <header>
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </header>
      <br />
      <Image
        title="Quick Think Quiz"
        className="think"
        src="/think.png"
        width={250}
        height={250}
        alt="logo"
      />
      <h2>Please Sign In Below</h2>
    </div>
  );
}
