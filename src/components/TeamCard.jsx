import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function TeamCard({ imgUrl,username, profession, fbLink, igLink, twLink }) {
  return (
    <div className="flex flex-col gap-3 text-center">
      <img src={imgUrl} alt="" />
      <p className="font-monsterrat font-bold text-[22px]">{username}</p>
      <p>{profession}</p>
      <div className="flex flex-row justify-center items-center gap-3">
        <a href={fbLink} target="_blank" rel="noreferrer">
          {" "}
          <FontAwesomeIcon icon={faFacebook} size="xl" color="#23A6F0" />
        </a>
        <a href={igLink} target="_blank" rel="noreferrer">
          {" "}
          <FontAwesomeIcon icon={faInstagram} size="xl" color="#23A6F0" />
        </a>
        <a href={twLink} target="_blank" rel="noreferrer">
          {" "}
          <FontAwesomeIcon icon={faTwitter} size="xl"  color="#23A6F0" />
        </a>
      </div>
    </div>
  );
}

export default TeamCard;
