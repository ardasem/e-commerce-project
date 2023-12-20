import React from "react";
import TeamCard from "./TeamCard";

function TeamCardsContainer() {
  return (
    <div className="flex flex-col text-center gap-[112px]">
      <p className="font-[700] text-[40px] pt-[112px] text-dark-blue">
        Meet Our Team
      </p>

      <div className="flex flex-row justify-center gap-[30px]">
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
      <div className="flex flex-row justify-center gap-[30px]">
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

      <div className="flex flex-row justify-center gap-[30px]">
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
  );
}

export default TeamCardsContainer;
