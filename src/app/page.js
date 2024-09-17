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
        width={200}
        height={200}
        alt="logo"
      />
      <br />
      <br />
      <h2>Please Sign In Below</h2>
    </div>
  );
}
