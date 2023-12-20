import React from "react";
import TeamHero from "../components/team/TeamHero";
import TeamCardsContainer from "../components/team/TeamCardsContainer";
import TeamAction from "../components/team/TeamAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <TeamAction/>


      </div>
    
  );
}

export default Team;
