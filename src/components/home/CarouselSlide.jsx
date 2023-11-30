import React from "react";
import { Link } from "react-router-dom";

function CarouselSlide(props) {
  return (
    <div>

      <div className="flex flex-col justify-center h-[45rem] bg-cover bg-no-repeat bg-hero-pattern-one ">
        <div className="flex flex-col justify-start py-[112px] mx-[197.5px] gap-[35px]">
        <p className="carousel-text text-[16px] leading-[24px] ">SUMMER 2020</p>
        <p className="carousel-text text-[58px] leading-[80px]">NEW COLLECTION</p>
        <p className="carousel-text text-[20px] leading-[30px] font-[400] ">We know how large objects will act,<br /> but things on a small scale.</p>
        <div className="btn-primary text-[24px] px-[40px] w-[221px]  py-[15px] whitespace-nowrap" >
          <Link to="/shop">SHOP NOW</Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;
