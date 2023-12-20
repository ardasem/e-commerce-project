import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faArrowTrendUp,
  faChevronRight,

} from "@fortawesome/free-solid-svg-icons";

function ContentCard(props) {
  const { heading, content, date, comments } = props;

  return (
    <div className="shadow-md">
      <img src="/assets/unsplash.png" alt="" />

      <div className="flex flex-col p-[25px] justify-start gap-[10px] font-['Montserrat'] ">
        <section className="tags flex flex-row gap-[15px] text-[12px]">
          <p className="text-light-blue">Google</p>
          <p>Trending</p>
          <p>New</p>
        </section>

        <div className="flex flex-col max-w-[300px] gap-4">
          <p className="font-['Montserrat'] text-[20px] font-[400] tracking-[0.2px] text-dark-blue">{heading}</p>
          <p className="font-['Montserrat'] text-[14px] font-[400] text-md-grey">{content}</p>

          <section className="analytics flex flex-row justify-between">
            <div className="flex flex-row items-center gap-[5px]">
              <FontAwesomeIcon icon={faClock} color="#23A6F0" />
              <p className="font-md-grey text-[12px] font-[400]">{date}</p>
            </div>

            <div className="flex flex-row items-center gap-[5px]">
              <FontAwesomeIcon icon={faArrowTrendUp} color="secondary-color-1" />
              <p className="font-md-grey text-[12px] font-[400]">{comments} Comments</p>
            </div>
          </section>

          <div className="flex flex-row gap-[10px] justify-start items-center">
            <p>Learn More</p>
            <FontAwesomeIcon icon={faChevronRight} color="#23A6F0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
