import React from "react";
import ProductCard from "../components/ProductCardold";

function Products() {
  return (
    <div className="flex flex-row mt-3">
      <div className="bg-list-pattern-one bg-auto bg-no-repeat flex-1"></div>
      <div className="flex flex-col flex-1 gap-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="font-monsterrat font-bold text-grey text-[20px]">
            Featured Products
          </p>
          <p className="font-monsterrat font-bold text-grey text-[40px]">
            Featured Products
          </p>
          <p className="font-monsterrat font-bold text-grey text-[14px] w-1/2 text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div className="flex flex-row justify-center gap-5">
          <ProductCard
            headingBlue={"English"}
            headingGrey={"Graphic Design"}
            description={
              "Long textLong textLong textLong textLong textLong text"
            }
            sales={15}
            price={22.3}
          />
          <ProductCard
            headingBlue={"English"}
            headingGrey={"PlaceHolder"}
            description={
              "Long textLong textLong textLong textLong textLong text"
            }
            sales={15}
            price={22.3}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
