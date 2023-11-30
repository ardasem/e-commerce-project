import React from 'react'

function PageIndicator() {
  return (
    <div className="pages flex flex-row justify-center items-center p-5"> 
    <button className="rounded-l p-3 font-['Montserrat'] text-dark-grey border border-grey bg-light-grey">First</button>
    <button className=" p-3 font-['Montserrat'] text-grey border ">1</button>
    <button className=" p-3 font-['Montserrat'] text-white border bg-light-blue">2</button>
    <button className=" p-3 font-['Montserrat'] text-grey border ">3</button>
    <button className="rounded-r p-3 font-['Montserrat'] text-light-blue text-grey border ">Next</button>
    
</div>
  )
}

export default PageIndicator