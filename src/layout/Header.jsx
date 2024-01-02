import React from "react";
import Navbar from "../components/header/Navbar";
import LoginBar from "../components/header/LoginBar";
import DarkBar from "../components/header/DarkBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col gap-[12px]">
      <DarkBar />

      <div className="flex flex-col md:flex-row items-center pb-[8px] pl-[38px] pr-[17px] justify-between">
        <div className="flex flex-col md:flex-row items-center py-[13px] pr-[49px] gap-[40px]">
          <Link className="text-dark-blue font-bold text-[24px] font-['Montserrat'] leading-[32px] flex-none" to="/">
            Bandage
          </Link>
          <Navbar />
        </div>

        <div className="flex flex-row items-center">
         
          <LoginBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
