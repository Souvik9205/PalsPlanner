import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <SignIn path="/sign-in" />;
    </div>
  );
}
