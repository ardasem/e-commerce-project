import React from 'react'

function AboutTextArea() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-[60px] py-[24px] px-[195px]">
    <div className="flex flex-col py-[24px] gap-[24px]">
      <p className="font-['Montserrat'] font-[400] text-[14px] text-[#E74040]">
        Problems trying
      </p>
      <p className="font-['Montserrat'] font-[700] text-dark-blue text-[24px]">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      </p>
    </div>

    <p className="font-[400] text-[14px] font-['Montserrat'] text-light-grey">
      Problems trying to resolve the conflict between the two major realms
      of Classical physics: Newtonian mechanics{" "}
    </p>
  </div>
  )
}

export default AboutTextArea