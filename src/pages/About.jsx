import React from "react";

import AboutHero from "../components/about/AboutHero";
import TeamSection from "../components/about/TeamSection";
import { Link } from "react-router-dom/";

function About() {
  return (
    <div>
      
      <AboutHero />

      <div className="flex flex-row items-center gap-[60px] py-[24px] px-[195px]">
        <div className="flex flex-col py-[24px] gap-[24px]">
          <p className="font-['Montserrat'] font-[400] text-[14px] text-[#E74040]">
            Problems trying
          </p>
          <p className="font-['Montserrat'] font-[700] text-dark-blue text-[24px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>

        <p className="font-[400] text-[14px] font-['Montserrat'] text-light-grey">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <div className="flex flex-row py-[80px] px-[195px] justify-center items-center text-center gap-[30px]">
        <div className="px-[30px]">
          <p className="font-['Montserrat'] text-[58px] font-[700] text-dark-blue">15K</p>
          <p className="font-['Montserrat'] text-[16px] font-[700] text-md-grey whitespace-nowrap">Happy Customers</p>
        </div>
        <div className="px-[30px]">
          <p className="font-['Montserrat'] text-[58px] font-[700] text-dark-blue">150K</p>
          <p className="font-['Montserrat'] text-[16px] font-[700] text-md-grey whitespace-nowrap">Monthly Visitors</p>
        </div>
        <div className="px-[30px]">
          <p className="font-['Montserrat'] text-[58px] font-[700] text-dark-blue">15</p>
          <p className="font-['Montserrat'] text-[16px] font-[700] text-md-grey whitespace-nowrap">Countries Worlwide</p>
        </div>
        <div className="px-[30px]">
          <p className="font-['Montserrat'] text-[58px] font-[700] text-dark-blue">100+</p>
          <p className="font-['Montserrat'] text-[16px] font-[700] text-md-grey whitespace-nowrap">Top Partners</p>
        </div>
        
      </div>

      <img className="m-auto" src="/assets/Videocard.png" alt="" />

     <TeamSection />

      <div className="">
        <div className="flex flex-col justify-around font-['Montserrat'] text-center gap-10 p-10 bg-transparent-grey">
          <p className="font-bold text-[32px]">Big Companies Are Here</p>
          <p className="text-light-grey">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>

          <div className="flex flex-row justify-center items-center gap-5 m-10">
            <img src="/assets/fa-brands-1.png" alt="" />
            <img src="/assets/fa-brands-2.png" alt="" />
            <img src="/assets/fa-brands-3.png" alt="" />
            <img src="/assets/fa-brands-4.png" alt="" />
            <img src="/assets/fa-brands-5.png" alt="" />
            <img src="/assets/fa-brands-6.png" alt="" />
            
          </div>


        </div>
      </div>
    </div>
  );
}

export default About;
