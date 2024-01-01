import React from "react";
import ProductCarousel from "./ProductCarousel";
import InfoCard from "./InfoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ProductSection() {
  const productName = "Floating Phone";

  return (
    <div className="flex flex-col items-start px-[195px] bg-transparent-grey">
      <div className="flex flex-row items-center gap-2 font-['Montserrat'] font-bold py-[24px]">
        <p>Home</p>
        <FontAwesomeIcon icon={faChevronRight} color="grey" />
        <p color="text-transparent-grey">Shop</p>
      </div>

      <div className="flex flex-col md:flex-row items-start">
        <ProductCarousel/>
        <InfoCard
          productName={productName}
          reviewNum={10}
          price={1368.33}
          inStock={true}
        />
      </div>
    </div>
  );
}

export default ProductSection;
