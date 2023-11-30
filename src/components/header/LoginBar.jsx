import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function LoginBar() {
  return (
    <div className="flex flex-row text-light-blue font-['Montserrat'] text-[14px]">
      <div className="flex flex-row items-center p-[15px] gap-[5px]">
        <FontAwesomeIcon icon={faUser} color="#23A6F0" />
        <p className="font-bold">Login/Register</p>
      </div>

      <div className="flex flex-row items-center p-[15px] gap-[5px]">
        <FontAwesomeIcon icon={faMagnifyingGlass} color="#23A6F0" />
      </div>

      <div className="flex flex-row items-center p-[15px] gap-[5px]">
        <FontAwesomeIcon icon={faCartShopping} color="#23A6F0" />
        <p>1</p>
      </div>

      <div className="flex flex-row items-center p-[15px] gap-[5px]">
        <FontAwesomeIcon icon={faHeart} color="#23A6F0" />
        <p>1</p>
      </div>
    </div>
  );
}

export default LoginBar;
