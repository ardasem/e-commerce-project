import React from "react";

function ProductCard(props) {
  const { imgUrl, category, name, oldPrice, price } = props;
  return (
    <div>
      <img src={imgUrl} alt="" />
      <div className="flex flex-col justify-center items-center gap-3 m-4">
        <p>{category}</p>
        <p>{name}</p>
        <section className="flex flex-row gap-2">
          <p>{oldPrice}</p>
          <p>{price}</p>
        </section>
        <img src="/assets/product-colors.png" alt="" />
      </div>
    </div>
  );
}

export default ProductCard;
