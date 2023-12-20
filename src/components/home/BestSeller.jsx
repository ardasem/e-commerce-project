import React from "react";
import ProductCard from "../ProductCard";

function BestSeller() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[10px] py-[80px]">
        <p className="font-['Montserrat'] text-[20px] font-[400] text-md-grey tracking-wide">
          Featured Products
        </p>
        <p className="font-['Montserrat'] text-[24px] font-[700] text-dark-blue tracking-wide">
          BEST SELLER PRODUCTS
        </p>
        <p className="font-['Montserrat'] text-[14px] font-[400] text-md-grey tracking-wide">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-col gap-y-[80px]">
        <div className="flex flex-row gap-x-[30px]">
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
        <div className="flex flex-row gap-4">
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
    </section>
  );
}

export default BestSeller;
