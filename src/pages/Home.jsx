import React from 'react'
import HeroCarousel from '../components/home/HeroCarousel'
import EditorsPick from '../components/home/EditorsPick'
import BestSeller from '../components/home/BestSeller'
import FeaturedPosts from '../components/home/FeaturedPosts'

function Home() {
  return (
    <div>
      <HeroCarousel />
      <EditorsPick />
      <BestSeller/>
      <HeroCarousel/>
      <FeaturedPosts/>

    </div>
  )
}

export default Home