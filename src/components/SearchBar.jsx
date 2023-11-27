import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const handleClick = () => {
    console.log("clicked");
  };

  const changeHandler=()=>{
    console.log('changed')
  }
  
  return (
    <form className="flex flex-row justify-center ">
      <button className="bg-white border border-y-light-grey border-l-light-grey border-r-0 rounded-l p-2 cursor-default " onClick={handleClick}>
        <FontAwesomeIcon icon={faMagnifyingGlass} color="grey" />
      </button>
      <input
        className="border border-r-light-grey border-l-0 border-y-light-grey rounded-r hover:border-teal px-2"
        type="text"
        name=""
        id=""
        placeholder="Search"
        onChange={changeHandler}
      />
    </form>
  );
}

export default SearchBar;
