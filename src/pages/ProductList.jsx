import React from "react";
import ProductListCategory from "../components/productlist/ProductListCategory";
import FilterComponent from "../components/productlist/FilterComponent";
import ProductCard from "../components/ProductCard";
import PageIndicator from "../components/productlist/PageIndicator";
import Brands from "../components/Brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ProductList({numberofpages}) {
  return (
    
    <div>
      <div className="w-full flex flex-row px-[195.5px] justify-between font-['Montserrat'] bg-transparent-grey items-center py-[24px]">
      <p className="text-[24px] font-[700]">Shop</p>
      <div className="flex flex-row gap-[5px] items-center">
        <p className="font-[16px] text-[#252B42]">Home</p>
        <FontAwesomeIcon icon={faChevronRight}  color={'#BDBDBD'}/>
        <p className="font-[16px] text-light-grey">Shop</p>
      </div>
      </div>
      <div className="flex flex-row gap-[15px] px-[176px] pb-[48px] bg-transparent-grey justify-center items-center">
        <ProductListCategory
          imgUrl={"/assets/card-bg-cover.png"}
          category={"cloth"}
          itemCount={8}
        />
        <ProductListCategory
          imgUrl={"/assets/card-bg-cover.png"}
          category={"cloth"}
          itemCount={8}
        />
        <ProductListCategory
          imgUrl={"/assets/card-bg-cover.png"}
          category={"cloth"}
          itemCount={8}
        />
        <ProductListCategory
          imgUrl={"/assets/card-bg-cover.png"}
          category={"cloth"}
          itemCount={8}
        />
        <ProductListCategory
          imgUrl={"/assets/card-bg-cover.png"}
          category={"cloth"}
          itemCount={8}
        />
      </div>

      <FilterComponent res={12} />

      <div className="flex flex-col px-[195px] gap-[48px]">
        <div className="flex flex-row gap-[30px] items-center">
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
        </div>{" "}
        <div className="flex flex-row gap-3 justify-center items-center">
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
        </div>{" "}
        <div className="flex flex-row gap-3 justify-center items-center">
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-5.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
        </div>
      </div>
       <PageIndicator/>

      <Brands />
    
    </div>
  );
}

export default ProductList;
