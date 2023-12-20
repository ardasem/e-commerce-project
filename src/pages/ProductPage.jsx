import React from 'react';
import ProductSection from '../components/productpage/ProductSection';
import DetailSection from '../components/productpage/DetailSection';
import BestSeller from '../components/productpage/BestSeller';
import Brands from '../components/Brands';

function ProductPage() {
    const productId= 1;

  return (
    <div>
        <ProductSection productId={productId}/>
        <DetailSection />
        <BestSeller />
        <Brands/>
    </div>
  )
}

export default ProductPage