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
    <div className="flex flex-row bg-dark-blue p-4 justify-between items-center text-white">
      <div className="flex flex-row gap-5">
        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faPhone} color="white" />
          <p className="font-monsterrat font-bold  text-[14px]">
            (225) 555-0118
          </p>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faEnvelope} color="white" />
          <p className="font-monsterrat font-bold  text-[14px]">
            arda.sem@gmail.com
          </p>
        </div>
      </div>

      <p className="font-monsterrat font-bold  text-[14px]">
        Follow Us and get a chance to win 80% off
      </p>

      <div className="flex flex-row justify-center items-center gap-2">
        <p className="font-monsterrat font-bold  text-[14px]">Follow Us:</p>
        <a href="https://instagram.com" target="_blank">
          <FontAwesomeIcon icon={faInstagram} color="white" />
        </a>

        <a href="https://youtube.com" target="_blank">
          <FontAwesomeIcon icon={faYoutube} color="white" />
        </a>

        <a href="https://facebook.com" target="_blank">
          <FontAwesomeIcon icon={faFacebook} color="white" />
        </a>

        <a href="https://twitter.com" target="_blank">
          <FontAwesomeIcon icon={faTwitter} color="white" />
        </a>
      </div>
    </div>
  );
}

export default DarkBar;
