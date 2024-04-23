import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import LogoI from "./(components)/(logos)/Instagram";
import LogoF from "./(components)/(logos)/Facebook";
import LogoG from "./(components)/(logos)/Github";
import LogoL from "./(components)/(logos)/Linkedin";

export default async function Home() {
  return (
    <div>
      <div
        className="p-1 flex flex-col justify-center items-center h-screen"
        style={{
          backgroundImage: "url('image3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="pb-3 px-10 h-3/5">
          <h1 className="text-5xl w-2/3 pb-6">Do Your Task quickly and easy</h1>
          <p className="font-lg">your tasks, rules, our support</p>
        </section>
        <section className="flex flex-col gap-3 justify-center items-center">
          <button className="bg-rose-100 hover:bg-gray-100 text-gray-800 font-bold py-3 px-10 rounded shadow-md shadow-slate-500">
            <Link href="/home">Log in</Link>
          </button>
          <p>any bug spotted?contact below!</p>
          <div className="flex gap-2 justify-center items-center ">
            <LogoI />
            <LogoF />
            <LogoG />
            <LogoL />
          </div>
        </section>
      </div>
    </div>
  );
}
