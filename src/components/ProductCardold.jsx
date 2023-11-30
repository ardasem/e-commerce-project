import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCartShopping,
  faHeart,
  faDownload,
  faClock,
  faTachographDigital
} from "@fortawesome/free-solid-svg-icons";

function ProductCard(props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col bg-product-pattern-one bg-cover h-full bg-no-repeat justify-between gap-20 p-2 ">
        <img className="w-1/5" src="../assets/tag.png" alt="" />

        <div className="flex flex-row  items-end gap-3 mt-[10rem] justify-center">
          <button className="bg-[#FFFFFF] rounded-full p-3">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="bg-[#FFFFFF] rounded-full p-3">
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
          <button className="bg-[#FFFFFF] rounded-full p-3">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 m-2">
        <div className="flex flex-row justify-between ">
          <p className="text-light-blue font-['Montserrat'] text-[20px] font-bold">
            {props.headingBlue}
          </p>
          <img className="h-full" src="/assets/Frame 4.png" alt="" />
        </div>

        <p className="font-['Montserrat'] text-[22px] font-bold text-grey">
          {props.headingGrey}
        </p>
        <p className="font-['Montserrat'] text-[14px] font-bold w-1/2">
          {props.description}
        </p>
        <div className="flex flex-row gap-2">
        <FontAwesomeIcon icon={faDownload} />
          <p>{props.sales} Sales</p>
        </div>

        <p>{props.price} $</p>

        <div className="flex flex-row">
        <img className="h-full" src="/assets/product-colors.png" alt="" />
        </div>

        <div className="flex flex-row gap-2">
          <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faClock} />
            <p>Pro...</p>
          </div>
          <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faTachographDigital} />
            <p>64 Less</p>
          </div>
          <div className="flex flex-row items-center gap-2">
          <FontAwesomeIcon icon={faClock} />
            <p>22hr</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
