import React from "react";
import Navbar from "../components/header/Navbar";
import SearchBar from "../components/header/SearchBar";
import DarkBar from "../components/header/DarkBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col">
      <div>
        <DarkBar />
      </div>
      <div className="flex flex-row items-center p-4 gap-[250px] ">
        <Link className="text-slate font-bold text-[24px] flex-none" to="/">
          BrandName
        </Link>

        <div className="flex flex-row justify-between items-center flex-1">
          <Navbar />
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
