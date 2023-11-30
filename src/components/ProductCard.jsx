import React from "react";

function ProductCard(props) {
  const { imgUrl, category, name, oldPrice, price } = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgUrl} alt="" />
      <div className="flex flex-col justify-center items-center gap-3 m-4">
        <p className="font-['Montserrat'] text-[16px] font-bold text-[#252B42]">{category}</p>
        <p className="font-['Montserrat'] text-[14px] font-bold text-md-grey">{name}</p>
        <section className="flex flex-row gap-2">
          <p className="font-['Montserrat'] text-[16px] font-bold text-light-grey">${oldPrice}</p>
          <p className="font-['Montserrat'] text-[16px] font-bold text-green">${price}</p>
        </section>
        <img src="/assets/product-colors.png" alt="" />
      </div>
    </div>
  );
}

export default ProductCard;
