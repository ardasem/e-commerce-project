import React from "react";
import TeamHero from "../components/team/TeamHero";
import TeamCardsContainer from "../components/team/TeamCardsContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Team() {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="py-[50px]">
        <div className="flex flex-col text-center font-['Montserrat'] ">
        <p className="text-[16px] font-[700] text-md-grey">WHAT WE DO</p>
        <p className="text-[58px] font-[700] text-dark-blue">Innovation tailored for you</p>
      </div>

      <div className="flex flex-row justify-center items-center gap-2 font-['Montserrat'] text-[14px] font-[700] p-10">
        <p className="text-dark-blue">Home</p> 
        <FontAwesomeIcon icon={faChevronRight} color="#BDBDBD"/>
        <p className="text-md-grey">Team</p>
        
      </div>
        </div>
     
        <TeamHero/>
        <TeamCardsContainer />
      


        <div className="py-[80px]">
          <div className="flex flex-col justify-center gap-[30px] font-['Montserrat'] font-bold text-center">
            <p className="text-[40px] text-dark-blue">Start your 14 days free trial</p>
            <p className="text-[14px] font-[400] text-md-grey">
              Met minim Mollie non desert Alamo est sit cliquey dolor <br />
              do met sent. RELIT official consequent.
            </p>
            <button className="btn-third rounded m-auto border-none">
              Try it free now
            </button>

            <div className=" flex flex-row gap-[34px] m-auto">
              <a href="https://facebook.com" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size="2x" color="#23A6F0" />
              </a>
              <a href="https://instagram.com" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#23A6F0" />
              </a>
              <a href="https://twitter.com" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faTwitter} size="2x" color="#23A6F0" />
              </a>
              <a href="https://twitter.com" target="_blank">
                {" "}
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#23A6F0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Team;
