import Image from "next/image";
import React from "react";

function Avatar() {
  return (
    <div className="w-full flex justify-center items-center ">
      <Image
        src="avatar.jpeg"
        alt="avatar"
        className="h-1/4 w-1/4 p-2 m-2 mt-12 rounded-full border-4 border-[#f8ff95] shadow-md shadow-gray-700"
      />
    </div>
  );
}

export default Avatar;