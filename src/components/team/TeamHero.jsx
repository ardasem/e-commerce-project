import React from 'react'

function TeamHero() {
  return (
    <div className="flex flex-col md:flex-row gap-[10px]">
        <div className="flex-1">
        <img  src="/assets/unsplash11.png" alt="" />
        </div>
       

        <div className="flex-1 grid grid-cols-2 items-stretch gap-[10px]">
            <img  src="/assets/unsplash1.png" alt="" />
            <img  src="/assets/unsplash2.png" alt="" />
            <img  src="/assets/unsplash3.png" alt="" />
            <img  src="/assets/unsplash4.png" alt="" />
        </div>
      </div>
  )
}

export default TeamHero