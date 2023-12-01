import React from "react";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom/";

function About() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center  gap-[30px] mx-[195px]">
        <div className="flex flex-col justify-start gap-[35px] font-['Montserrat'] font-bold ">
          <p className="text-[20px] font-[700 text-dark-blue">ABOUT COMPANY</p>
          <p className="text-[58px] font-[700] text-dark-blue">ABOUT US</p>
          <p className="text-[20px] font-[400] text-light-grey">
            We know how large objects will act,
            <br /> but things on a small scale
          </p>
          <button className="btn-third rounded px-[40px] py-[15px] w-[195px] ">
            <div className="text-center text-white text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">
            Get Quote Now
            </div>
          </button>
        </div>

        <div>
          <img  src="/assets/about-banner.png" alt="" />
        </div>
      </div>

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

      <div className="flex flex-col justify-around font-['Montserrat'] text-center py-20 gap-10">
        <p className="font-bold text-[32px]"><Link to='/team'>Meet Our Team</Link></p>
        <p className="text-light-grey">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>

        <div className="flex flex-row justify-center gap-3">
          <TeamCard
            username={"Username"}
            profession={"Profession"}
            fbLink={"https://facebook.com"}
            igLink={"https://instagram.com"}
            twLink={"https://twitter.com"}
            imgUrl={"/assets/team-1-user-1.jpg"}
          />
          <TeamCard
            username={"Username"}
            profession={"Profession"}
            fbLink={"https://facebook.com"}
            igLink={"https://instagram.com"}
            twLink={"https://twitter.com"}
            imgUrl={"/assets/team-1-user-1.jpg"}
          />
          <TeamCard
            username={"Username"}
            profession={"Profession"}
            fbLink={"https://facebook.com"}
            igLink={"https://instagram.com"}
            twLink={"https://twitter.com"}
            imgUrl={"/assets/team-1-user-1.jpg"}
          />
        </div>
      </div>

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
