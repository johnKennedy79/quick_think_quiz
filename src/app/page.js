import Image from "next/image";
import Thinks from "./public/thinks.png";

export default async function Home() {
  return (
    <div className="homePage">
      <header>
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </header>
      <br />
      <Image
        title="Quick Think Quiz Logo"
        className="think"
        src={Thinks}
        width={200}
        height={200}
        alt="This Is The Logo"
      />
      <br />
      <br />
      <h2>Please Sign In Below</h2>
    </div>
  );
}

