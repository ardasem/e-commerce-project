import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faList } from "@fortawesome/free-solid-svg-icons";

function FilterComponent({ res }) {
  return (
    <div className=" flex flex-row justify-between items-center px-[195px] py-[24px] font-['Montserrat'] font-[700] text-md-grey">
      
        <p className="font-['Montserrat'] font-[700] text-md-grey">Showing all {res} results</p>
      

      <div className="flex flex-row gap-[15px] items-center">
        <p>Views: </p>
        <button className="border border-grey py-[15px] px-[17px] rounded">
          <FontAwesomeIcon icon={faGripVertical} />
        </button>
        <button className="border border-grey p-[15px] rounded">
          <FontAwesomeIcon icon={faList} />
        </button>
      </div>

      <div className="flex flex-row gap-[15px]">
        <select name="filter" id="filter" className="border border-gray font-normal text-[14px] bg-transparent-grey rounded p-3">
          <option value="popularity" selected>Popularity</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button className="btn-third rounded border-none">Filter</button>
      </div>
    </div>
  );
}

export default FilterComponent;
