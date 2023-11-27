import React from "react";

function ProductCard(props) {
  const { imgUrl, category, name, oldPrice, price } = props;
  return (
    <div>
      <img src={imgUrl} alt="" />
      <div className="flex flex-col justify-center items-center gap-3 m-4">
        <p className="text-monsterrat text-[16px] font-bold text-[#252B42]">{category}</p>
        <p className="text-monsterrat text-[14px] font-bold text-md-grey">{name}</p>
        <section className="flex flex-row gap-2">
          <p className="text-monsterrat text-[16px] font-bold text-light-grey">${oldPrice}</p>
          <p className="text-monsterrat text-[16px] font-bold text-green">${price}</p>
        </section>
        <img src="/assets/product-colors.png" alt="" />
      </div>
    </div>
  );
}

export default ProductCard;
