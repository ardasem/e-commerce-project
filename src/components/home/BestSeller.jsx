import React from 'react'
import ProductCard from '../ProductCard'

function BestSeller() {
  return (
    <section className='flex flex-col justify-center items-center gap-5 p-5'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <p>Featured Products</p>
            <p>BESTSELLER PRODUCTS</p>
            <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className='flex flex-row gap-4'>
            <ProductCard imgUrl={'/assets/product-cover-5.png'} category={'English'} name={'Graphic Design'} oldPrice={16.88} price={6.48} />
            <ProductCard imgUrl={'/assets/product-cover-5.png'} category={'English'} name={'Graphic Design'} oldPrice={16.88} price={6.48} />
            <ProductCard imgUrl={'/assets/product-cover-5.png'} category={'English'} name={'Graphic Design'} oldPrice={16.88} price={6.48} />
            <ProductCard imgUrl={'/assets/product-cover-5.png'} category={'English'} name={'Graphic Design'} oldPrice={16.88} price={6.48} />
        </div>
        <div  className='flex flex-row gap-4'>
            <ProductCard imgUrl={'/assets/product-cover-5.png'} category={'English'} name={'Graphic Design'} oldPrice={16.88} price={6.48} />
            <ProductCard imgUrl={'/assets/product-cover-5.png'} category={'English'} name={'Graphic Design'} oldPrice={16.88} price={6.48} />
            <ProductCard imgUrl={'/assets/product-cover-5.png'} category={'English'} name={'Graphic Design'} oldPrice={16.88} price={6.48} />
            <ProductCard imgUrl={'/assets/product-cover-5.png'} category={'English'} name={'Graphic Design'} oldPrice={16.88} price={6.48} />
        </div>
    </section>
  )
}

export default BestSeller