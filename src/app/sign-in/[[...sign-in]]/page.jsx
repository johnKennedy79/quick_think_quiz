import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="display: flex justify-center">
      <SignIn />
    </div>
  );
}
