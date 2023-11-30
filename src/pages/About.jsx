import React from "react";

function About() {
  return (
    <div className="p-10">
      <div className="flex flex-row justify-between items-center gap-3 px-10">
        <div className="flex flex-col justify-start gap-5 font-monsterrat font-bold ">
          <p className="text-[20px]">ABOUT COMPANY</p>
          <p className="text-[58px]">ABOUT US</p>
          <p className="text-[20px] text-light-grey">We know how large objects will act,<br /> but things on a small scale</p>
          <button className="btn-third rounded max-w-[220px]">Get Quote Now</button>
        </div>

        <div>
          <img className="w-[550px]" src="/assets/about-banner.png" alt="" />
        </div>
      </div>

      <div className="flex flex-row justify-around items-center gap-5 px-10 py-20">
        <div className="flex flex-col gap-3">
            <p className="font-monsterrat font-bold text-red-500">Problems trying</p>
            <p className="font-monsterrat font-bold text-[26px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
        </div>
        
        <p className="font-bold text-light-grey">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>

      <div className="flex flex-row py-20 px-10 justify-around items-center text-center">
        <div>
            <p className="font-monsterrat text-[36px] text-slate-900">15K</p>
            <p>Happy Customers</p>
        </div>
        <div>
            <p className="font-monsterrat text-[36px] text-slate-900">150K</p>
            <p>Monthly Visitors</p>
        </div>
        <div>
            <p className="font-monsterrat text-[36px] text-slate-900">15</p>
            <p>ountries Worldwide</p>
        </div>
        <div>
            <p className="font-monsterrat text-[36px] text-slate-900">100+</p>
            <p>Top Partners</p>
        </div>
      </div>
    </div>
  );
}

export default About;
