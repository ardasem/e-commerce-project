import React from "react";
import ContentCard from "../ContentCard";

function FeaturedPosts() {
  return (
    <div className="flex flex-col justify-center items-center p-20 gap-5 ">
      
      <div className="flex flex-col text-center gap-3">
        <p className="text-monsterrat text-[20px] font-bold text-light-blue">Practice Advice</p>
        <p className="text-monsterrat text-[30px] font-bold">Featured Posts</p>
        <p className="text-monsterrat text-[20px] font-bold text-md-grey">
          Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <section className="flex flex-row justify-center items-center gap-5">
        <ContentCard
          heading={"Loudest à la Madison #1 (L'integral)"}
          content={
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          }
          date={"22 April 2021"}
          comments={10}
        />

        <ContentCard
          heading={"Loudest à la Madison #1 (L'integral)"}
          content={
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          }
          date={"22 April 2021"}
          comments={10}
        />

        <ContentCard
          heading={"Loudest à la Madison #1 (L'integral)"}
          content={
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          }
          date={"22 April 2021"}
          comments={10}
        />
      </section>
    </div>
  );
}

export default FeaturedPosts;
