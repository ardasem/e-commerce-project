import React from "react";
import ContentCard from "../ContentCard";

function FeaturedPosts() {
  return (
    <div className="flex flex-row justify-center items-center p-10 gap-5">
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
    </div>
  );
}

export default FeaturedPosts;
