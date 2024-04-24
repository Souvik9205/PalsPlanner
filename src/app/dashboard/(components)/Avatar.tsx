import React from "react";
import { currentUser } from "@clerk/nextjs/server";

async function Avatar() {
  const user = await currentUser();
  const imgURL = user?.imageUrl;
  return (
    <div className="w-full flex justify-center items-center ">
      <img
        src={imgURL}
        alt="avatar"
        className="h-1/4 w-1/4 p-2 m-2 mt-12 rounded-full border-4 border-[#f8ff95] shadow-md shadow-gray-700"
      />
    </div>
  );
}

export default Avatar;
