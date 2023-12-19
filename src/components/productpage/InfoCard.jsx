import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCartShopping,
  faHeart,
  faDownload,
  faClock,
  faTachographDigital,
} from "@fortawesome/free-solid-svg-icons";

function InfoCard(props) {
  const { productName, reviewNum, price, inStock } = props;
  return (
    <div className="divide-y-2 divide-grey px-[24px] py-[11px]">
      <div className=" flex flex-col gap-[20px] pb-[20px]">
        <h1 className="font-[Montserrat] text-[20px] font-[400] text-dark-blue">
          {productName}
        </h1>
        <div className="flex flex-row gap-[10px] items-center">
          <div className="flex flex-row gap-1">
            <img className="max-w-[15px]" src="/assets/star.png" alt="" />
            <img className="max-w-[15px]" src="/assets/star.png" alt="" />
            <img className="max-w-[15px]" src="/assets/star.png" alt="" />
            <img className="max-w-[15px]" src="/assets/star.png" alt="" />
            <img className="max-w-[15px]" src="/assets/star-empty.png" alt="" />
          </div>
          <p className="font-[Montserrat] text-[14px] font-[700] text-md-grey">
            {reviewNum} Reviews
          </p>
        </div>

        <p className="font-[Montserrat] text-[24px] font-[700] text-dark-blue">
          ${price}
        </p>

        <div className="flex flex-row font-[Montserrat] text-[14px] font-[700] gap-[5px]">
          <p className="text-md-grey">Availability : </p>
          {inStock ? (
            <p className="text-light-blue">In Stock</p>
          ) : (
            <p className="text-red">Not Available</p>
          )}
        </div>

        <p className="font-[Montserrat] text-[14px] font-[400] text-font-grey">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>

      <div className="flex flex-col gap-[60px] pt-[20px]">
        <div className="flex flex-row max-h-[30px] gap-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="15" fill="#23A6F0" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="15" fill="#2DC071" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="15" fill="#E77C40" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="15" fill="#252B42" />
          </svg>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <button className="btn-third rounded-[6px] border-none py-[10px] px-[20px] text-[14px]">
            Select Options
          </button>

          <div className="flex flex-row gap-[10px]">
            <button className="bg-[#FFFFFF] rounded-full px-2 py-1 border-1">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="bg-[#FFFFFF] rounded-full px-2 py-1 border-1">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <button className="bg-[#FFFFFF] rounded-full px-2 py-1 border-1">
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
