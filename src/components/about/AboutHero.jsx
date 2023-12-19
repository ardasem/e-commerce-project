import React from 'react'

function AboutHero() {
  return (
    <div className="flex flex-row justify-between items-center  gap-[30px] mx-[195px]">
        <div className="flex flex-col justify-start gap-[35px] font-['Montserrat'] font-bold ">
          <p className="text-[20px] font-[700 text-dark-blue">ABOUT COMPANY</p>
          <p className="text-[58px] font-[700] text-dark-blue">ABOUT US</p>
          <p className="text-[20px] font-[400] text-light-grey">
            We know how large objects will act,
            <br /> but things on a small scale
          </p>
          <button className="btn-third rounded px-[40px] py-[15px] w-[195px] ">
            <div className="text-center text-white text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">
            Get Quote Now
            </div>
          </button>
        </div>

        <div>
          <img  src="/assets/about-banner.png" alt="" />
        </div>
      </div>
  )
}

export default AboutHero