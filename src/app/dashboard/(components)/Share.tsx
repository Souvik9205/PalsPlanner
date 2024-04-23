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
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
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
        <div className="mt-2 w-full flex justify-around p-2">
          <FacebookShareButton url="https://pals-planner.vercel.app/">
            <FacebookIcon size={40} />
          </FacebookShareButton>
          <EmailShareButton url="https://pals-planner.vercel.app/">
            <EmailIcon size={40} />
          </EmailShareButton>
          <LinkedinShareButton url="https://pals-planner.vercel.app/">
            <LinkedinIcon size={40} />
          </LinkedinShareButton>
          <TelegramShareButton url="https://pals-planner.vercel.app/">
            <TelegramIcon size={40} />
          </TelegramShareButton>
          <WhatsappShareButton url="https://pals-planner.vercel.app/">
            <WhatsappIcon size={40} />
          </WhatsappShareButton>
        </div>
      )}
    </div>
  );
};

export default Share;
