import React from "react";

const EmptyHome = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full">
      <img src="homeEmpty.png" alt="Logo" className="h-[200px] w-[200px]" />
      <p className="text-lg text-center">It&apos;s nothing here yet!</p>
    </div>
  );
};

export default EmptyHome;
