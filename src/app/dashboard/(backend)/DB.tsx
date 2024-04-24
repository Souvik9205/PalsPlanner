import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import User from "@/app/(models)/User";
import Countup from "../(components)/Countup";

async function DB() {
  const user = await currentUser();
  const authEmail = user?.emailAddresses[0].emailAddress;
  let TaskCreated: number | undefined;
  let DoneTask: number | undefined;

  try {
    const foundUser = await User.findOne({ email: authEmail });
    if (foundUser) {
      TaskCreated = foundUser.TotalTask;
      DoneTask = foundUser.DoneTask;
    }
  } catch (error) {
    console.error("Error during profile handling:", error);
  }
  const Data: [number, number] = [TaskCreated || 0, DoneTask || 0];

  return <Countup data={Data} />;
}

export default DB;
