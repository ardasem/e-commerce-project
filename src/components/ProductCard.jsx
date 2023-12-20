import React from "react";

function ProductCard(props) {
  const { imgUrl, category, name, oldPrice, price,options} = props;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex-1">

      <img src={imgUrl} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center gap-[10px] p-[25px]">
        <p className="font-['Montserrat'] text-[16px] font-[700] text-dark-blue">{category}</p>
        <p className="font-['Montserrat'] text-[14px] font-bold text-md-grey">{name}</p>
        <section className="flex flex-row gap-[5px]">
          <p className="font-['Montserrat'] text-[16px] font-bold text-light-grey">${oldPrice}</p>
          <p className="font-['Montserrat'] text-[16px] font-bold text-md-green">${price}</p>
        </section>
        {options && <img src="/assets/product-colors.png" alt="" />}
      </div>
    </div>
  );
}

export default ProductCard;
