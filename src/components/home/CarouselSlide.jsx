import React from "react";
import { Link } from "react-router-dom";

function CarouselSlide(props) {
  return (
    <div>

      <div className="flex flex-col justify-center h-[45rem] bg-cover bg-no-repeat bg-hero-pattern-one ">
        <div className="flex flex-col gap-3 ml-[20rem]">
        <p className="carousel-text text-[24px] ">SUMMER 2020</p>
        <p className="carousel-text text-[58px] ">NEW COLLECTION</p>
        <p className="carousel-text text-[24px] ">We know how large objects will act, but things on a small scale.</p>
        <div className="btn-primary text-[24px] w-56" >
          <Link to="/shop">SHOP NOW</Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;
