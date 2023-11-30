import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function DarkBar() {
  return (
    <div className="flex flex-row bg-dark-blue pt-[9px] pb-[3px] px-[24px] justify-between items-center text-white">
      <div className="flex flex-row  gap-[10px]">
        <div className="flex flex-row gap-[5px] leading-[24px] items-center m-[10px]">
          <FontAwesomeIcon icon={faPhone} color="white" />
          <p className="font-['Montserrat'] font-bold  text-[14px]">
            (225) 555-0118
          </p>
        </div>

        <div className="flex flex-row gap-[5px] leading-[24px] items-center m-[10px]">
          <FontAwesomeIcon icon={faEnvelope} color="white" />
          <p className="font-['Montserrat'] font-bold  text-[14px]">
            arda.sem@gmail.com
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-[5px] leading-[24px] items-center m-[10px]">
      <p className="font-['Montserrat'] font-bold  text-[14px]">
        Follow Us and get a chance to win 80% off
      </p>
      </div>

     

      <div className="flex flex-row gap-[5.5px] leading-[24px] items-center m-[10px]">
        <p className="font-['Montserrat'] font-bold text-[14px]">Follow Us:</p>

        <a className="p-[5px]" href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} color="white" />
        </a>

        <a className="p-[5px]" href="https://youtube.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} color="white" />
        </a>

        <a className="p-[5px]" href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} color="white" />
        </a>

        <a className="p-[5px]" href="https://twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} color="white" />
        </a>
      </div>
    </div>
  );
}

export default DarkBar;
