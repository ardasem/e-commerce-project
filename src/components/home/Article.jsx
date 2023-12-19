import React from "react";

function Article() {
  return (
    <div className="flex flex-row justify-center items-center gap-[30px] ">
      <img src="/assets/asian-woman-man-with-winter-clothes 1.png" alt="" />

      <div className="flex flex-col gap-[30px] p-10">
        <p className="font-['Montserrat'] text-light-grey text-[16px] font-[700] tracking-wide">SUMMER 2020</p>
        <p className="font-['Montserrat'] text-dark-blue text-[40px] font-[700] tracking-wide" >Part of the Neural <br /> Universe</p>
        <p className="font-['Montserrat'] text-md-grey text-[20px] font-[400] tracking-wide">We know how large objects will act,<br /> but things on a small scale.</p>

        <section className="flex flex-row gap-[10px]">
          <button className="btn-primary">BUY NOW</button>
          <button className="btn-secondary">READ MORE</button>
        </section>
      </div>
    </div>
  );
}

export default Article;
