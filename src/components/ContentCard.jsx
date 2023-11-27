import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faArrowTrendUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function ContentCard(props) {
  const { heading, content, date, comments } = props;

  return (
    <div className="">
      <img src="/assets/unsplash.png" alt="" />

      <div className="flex flex-col p-4 justify-start gap-4">
        <section className="tags flex flex-row gap-2">
          <p className="text-light-blue">Google</p>
          <p>Google</p>
          <p>Google</p>
        </section>

        <div className="flex flex-col max-w-[300px]">
          <p className="font-monsterrat font-[42px] font-bold">{heading}</p>
          <p>{content}</p>

          <section className="analytics flex flex-row justify-between">
            <div className="flex flex-row items-center gap-2">
              <FontAwesomeIcon icon={faClock} />
              <p>{date}</p>
            </div>

            <div className="flex flex-row items-center gap-2">
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <p>{comments} Comments</p>
            </div>
          </section>

          <div className="flex flex-row items-center gap-2">
            <p>Learn More</p>
            <FontAwesomeIcon icon={faArrowRight} color="blue" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
