import React from "react";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/option";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <div>
      <h1 className="text-3xl underline">hi it's / route</h1>
      <br />
      {session ? (
        <Link href="/api/auth/signout?callbackUrl=/">Log out</Link>
      ) : (
        <Link href="/api/auth/signin">Log in</Link>
      )}
      <br />
      <button>
        <Link href="/home">Home page</Link>
      </button>
    </div>
  );
}
