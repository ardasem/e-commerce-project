import React from "react";
import Navbar from "../components/header/Navbar";
import LoginBar from "../components/header/LoginBar";
import DarkBar from "../components/header/DarkBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col gap-[12px]">
      <DarkBar />

      <div className="flex flex-row items-center pb-[8px] pl-[38px] pr-[17px]">
        <div className="py-[13px] pr-[49px]">
          <Link className="text-dark-blue font-bold text-[24px] font-monsterrat leading-[32px] flex-none" to="/">
            Bandage
          </Link>
        </div>

        <div className="flex flex-row justify-between items-center gap-[471px]">
          <Navbar />
          <LoginBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
