import React from "react";
import { currentUser } from "@clerk/nextjs/server";
const Profile = async () => {
  const user = await currentUser();
  const name = user?.username;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <p className="text-3xl font-semibold text-white font-mono mb-2">
          Hi <span>{name}</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
