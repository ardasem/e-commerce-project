import React from "react";
import TeamCard from "../components/TeamCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Team() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col text-center font-monsterrat">
        <p className="text-[20px]">WHAT WE DO</p>
        <p className="text-[58px] font-bold">Innovation tailored for you</p>
      </div>

      <div className="flex flex-row justify-center items-center gap-2 font-monsterrat font-bold p-10">
        <p>Home</p> 
        <FontAwesomeIcon icon={faChevronRight} color="#BDBDBD"/>
        <p color="text-transparent-grey">Team</p>
        
      </div>

      <div className="flex flex-row justify-around gap-3">
        <img src="/assets/unsplash11.png" alt="" />
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-3">
            <img src="/assets/unsplash1.png" alt="" />
            <img src="/assets/unsplash2.png" alt="" />
          </div>
          <div className="flex flex-row gap-3">
            <img src="/assets/unsplash3.png" alt="" />
            <img src="/assets/unsplash4.png" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center gap-28 p-20">
        <p className="font-bold text-[32px]">Meet Our Team</p>

        <div className="flex flex-row justify-center gap-14">
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
        <div className="flex flex-row justify-center gap-14">
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

        <div className="flex flex-row justify-center gap-14">
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

        <div className="pt-24">
          <div className="flex flex-col justify-center gap-5 font-monsterrat font-bold ">
            <p className="text-[58px]">Start your 14 days free trial</p>
            <p className="text-[20px] text-light-grey">
              Met minim Mollie non desert Alamo est sit cliquey dolor <br />
              do met sent. RELIT official consequent.
            </p>
            <button className="btn-third rounded m-auto">
              Try it free now
            </button>

            <div className=" flex flex-row gap-3 m-auto">
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
    </div>
  );
}

export default Team;
