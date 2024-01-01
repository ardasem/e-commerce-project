import React from "react";
import ProductCard from "../ProductCard";

function BestSeller() {
  return (
    <div className="flex flex-col justify-center mx-[195px] my-[48px]">
      <div className=" border-b-[1px] border-light-grey mb-[24px] ">
        <div className="py-[24px]">
          <p className="font-[Montserrat] text-[24px] font-[700] text-dark-blue">
            BESTSELLER PRODUCTS
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row  gap-x-[30px]">
          <ProductCard
            imgUrl={"/assets/product-cover-best.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-best.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-best.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-best.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
        </div>
        <div className="flex flex-col md:flex-row flex-1 gap-x-[30px]">
          <ProductCard
            imgUrl={"/assets/product-cover-best.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-best.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-best.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
          <ProductCard
            imgUrl={"/assets/product-cover-best.png"}
            category={"English"}
            name={"Graphic Design"}
            oldPrice={16.88}
            price={6.48}
          />
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
