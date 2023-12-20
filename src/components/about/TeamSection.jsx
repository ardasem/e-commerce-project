import React from 'react'
import TeamCard from '../team/TeamCard';
import { Link } from 'react-router-dom';

function TeamSection() {
  return (
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
  )
}

export default TeamSection