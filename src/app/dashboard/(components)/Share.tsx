"use client";
import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";

const Share = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 p-4 mb-4 mx-2 bg-[#fbfbfb] rounded-md">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleFaq}
      >
        <h2 className="text-lg font-semibold">Invite Your Friends!</h2>
        <FaArrowDown
          className={`transition-transform duration-300 transformc ${
            isOpen ? "-rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="mt-2">
          <FacebookShareButton url="">facebook</FacebookShareButton>
        </div>
      )}
    </div>
  );
};

export default Share;
