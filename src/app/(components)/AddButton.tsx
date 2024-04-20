import React from "react";

function AddButton() {
  return (
    <div className="w-full flex justify-end absolute bottom-20 right-3 ">
      <div className="flex bg-white items-center justify-center rounded-full h-[20px] w-[20px] p-6 shadow-[0_10px_75px_-2px_rgba(0,0,0,0.3)] shadow-black">
        <p className="text-3xl font-bold">+</p>
      </div>
    </div>
  );
}

export default AddButton;
