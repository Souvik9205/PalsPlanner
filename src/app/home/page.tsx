import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/option.js";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/home");
  }
  const userEmail = session?.user?.email;
  return (
    <div>
      <h1>{userEmail}</h1>
    </div>
  );
};

export default page;
