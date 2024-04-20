import React from "react";
import Link from "next/link";
import { FaCalendar, FaTasks, FaUser } from "react-icons/fa";

function Footer() {
  return (
    <div className=" p-5 shadow-black shadow-[0_15px_70px_-15px_rgba(0,0,0,0.3)]  rounded-t-2xl bg-white">
      <div className="flex justify-around">
        <Link href="/calender">
          <FaCalendar size={20} />
        </Link>
        <Link href="/home">
          <FaTasks size={20} />
        </Link>
        <Link href="#">
          <FaUser size={20} />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
