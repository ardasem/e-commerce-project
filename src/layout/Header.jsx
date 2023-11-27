import React from "react";
import Navbar from "../components/header/Navbar";
import LoginBar from "../components/header/LoginBar";
import DarkBar from "../components/header/DarkBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col">
    
        <DarkBar />
   
      <div className="flex flex-row items-center p-4 gap-[250px] ">
        <Link className="text-slate font-bold text-[24px] flex-none" to="/">
          BrandName
        </Link>

        <div className="flex flex-row justify-between items-center flex-1">
          <Navbar />
          <LoginBar />
        </div>

        
      </div>
    </header>
  );
}

export default Header;
