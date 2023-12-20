import React from "react";
import ProductCard from "../ProductCard";

function BestSeller() {
  return (
    <div className="flex flex-col justify-center">
      <div className="my-[48px] border-b-[1px] border-light-grey mx-[195px] ">
        <div className="py-[24px]">
          <p className="font-[Montserrat] text-[24px] font-[700] text-dark-blue">
            BESTSELLER PRODUCTS
          </p>
        </div>
      </div>

      <div className="flex flex-col m-auto shrink-1">
      <div className="flex flex-row  gap-x-[30px]">
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
      <div className="flex flex-row flex-1 gap-x-[30px]">
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
