import React from 'react';

function ProductListCategory(props) {
  const { imgUrl, category, itemCount } = props;

  return (
    <div className="relative">
      <img src={imgUrl} alt="" className="w-full h-auto" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-['Montserrat'] text-center text-white">
        <p className='text-[16px] font-[700]'>{category.toUpperCase()}</p>
        <p className='text-[14px] font-[400]'>{itemCount} items</p>
      </div>
    </div>
  );
}

export default ProductListCategory;
