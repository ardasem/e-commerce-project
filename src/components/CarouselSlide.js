import React from "react";
import { Link } from "react-router-dom";

function CarouselSlide(props) {
  return (
    <div>

      <div className="flex flex-col justify-center items-start w-full h-[45rem] bg-cover bg-no-repeat bg-hero-pattern-one ">
        <div className="flex flex-col gap-3 ml-[20rem]">
        <p className="text-white font-monsterrat text-[24px] font-bold">SUMMER 2020</p>
        <p className="text-white font-monsterrat text-[58px] font-bold">NEW COLLECTION</p>
        <p className="text-white font-monsterrat text-[24px] font-bold">We know how large objects will act, but things on a small scale.</p>
        <div className="bg-green  rounded text-white font-monsterrat text-[24px] font-bold flex justify-center w-25 p-4 text-white font-monsterrat text-[24px] font-boldF">
          <Link to="/lol">SHOP NOW</Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;
