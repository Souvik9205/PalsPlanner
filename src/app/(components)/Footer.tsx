import React from "react";
import { FaCalendar, FaTasks, FaUser } from "react-icons/fa";

function Footer() {
  return (
    <div className=" p-5 shadow-black shadow-[0_15px_70px_-15px_rgba(0,0,0,0.3)] mt-10 rounded-t-2xl">
      <div className="flex justify-around">
        <FaCalendar size={20} />
        <FaTasks size={20} />
        <FaUser size={20} />
      </div>
    </div>
  );
}

export default Footer;
