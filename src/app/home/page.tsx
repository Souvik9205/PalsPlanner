import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/option.js";
import { redirect } from "next/navigation";
import Link from "next/link";
import Header from "./(components)/Header";
import Footer from "../(components)/Footer";

const page = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/home");
  }
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Link href="/api/auth/signout?callbackUrl=/">Log out</Link>
      </div>
      <Footer />
    </div>
  );
};

export default page;
