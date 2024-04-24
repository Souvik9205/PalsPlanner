import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import User from "@/app/(models)/User";

async function DB() {
  const { userId } = auth();
  const user = await currentUser();
  if (!userId || !user) {
    redirect("/");
  }
  const { username } = user;
  const authEmail = user.emailAddresses[0].emailAddress;

  try {
    const foundUser = await User.findOne({ email: authEmail });
    if (foundUser) {
      console.log("user exists!");
    } else {
      const newUser = await User.create({
        email: authEmail,
        user: username,
      });
      console.log("User registered successfully");
    }
  } catch (error) {
    console.error("Error during profile handling:", error);
  }

  return null;
}

export default DB;
