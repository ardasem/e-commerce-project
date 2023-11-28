import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faList } from "@fortawesome/free-solid-svg-icons";

function FilterComponent({ res }) {
  return (
    <div className=" flex flex-row justify-around items-center p-10">
      <div>
        <p>Showing all {res} results</p>
      </div>

      <div className="flex flex-row gap-3 justify-center items-center">
        <p>Views: </p>
        <button className="border border-grey py-2 px-3 rounded">
          <FontAwesomeIcon icon={faGripVertical} />
        </button>
        <button className="border border-grey py-2 px-3 rounded">
          <FontAwesomeIcon icon={faList} />
        </button>
      </div>

      <div className="flex flex-row gap-3">
        <select name="filter" id="filter" className="border border-gray bg-transparent-grey rounded p-3">
          <option value="popularity" selected>Popularity</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button className="bg-light-blue text-white p-3 rounded">Filter</button>
      </div>
    </div>
  );
}

export default FilterComponent;
