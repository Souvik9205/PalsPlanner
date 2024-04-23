import React from "react";
import Link from "next/link";

function LogOut() {
  return (
    <div className="pt-10 w-full flex flex-col gap-3 justify-center items-center">
      <p className="font-medium text-sm text-neutral-100">Want to Log out?</p>
      <button className="bg-rose-100 hover:bg-gray-100 text-gray-800 font-bold py-3 px-10 rounded shadow-md shadow-slate-500 w-2/5">
        <Link href="/">Log Out</Link>
      </button>
    </div>
  );
}

export default LogOut;
