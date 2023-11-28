import React from "react";
import ProductListCategory from "../components/productlist/ProductListCategory";
import FilterComponent from "../components/productlist/FilterComponent";
import ProductCard from "../components/ProductCard";
import PageIndicator from "../components/productlist/PageIndicator";

function ProductList({numberofpages}) {
  return (
    <div>
      <div className="flex flex-row gap-3 p-10 justify-center items-center">
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

      <div className="flex flex-col justify-center items-center">
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

      <div className="flex flex-row justify-center items-center">
        <img src="/assets/row.png" alt="" />
      </div>

    
    </div>
  );
}

export default ProductList;
