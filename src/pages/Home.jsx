import React from 'react'
import HeroCarousel from '../components/home/HeroCarousel'
import EditorsPick from '../components/home/EditorsPick'
import BestSeller from '../components/home/BestSeller'
import FeaturedPosts from '../components/home/FeaturedPosts'
import Article from '../components/home/Article'

function Home() {
  return (
    <div>
      <HeroCarousel />
      <EditorsPick />
      <BestSeller/>
      <HeroCarousel/>
      <Article/>
      <FeaturedPosts/>

    </div>
  )
}

export default Home