import React from "react";

function Article() {
  return (
    <div className="flex flex-row justify-center items-center gap-10 ">
      <img src="/assets/asian-woman-man-with-winter-clothes 1.png" alt="" />

      <div className="flex flex-col gap-5 p-10">
        <p className="font-['Montserrat'] text-light-grey text-[20px] font-bold tracking-wide">SUMMER 2020</p>
        <p className="font-['Montserrat'] text-[#252B42] text-[45px] font-bold tracking-wide" >Part of the Neural <br /> Universe</p>
        <p className="font-['Montserrat'] text-md-grey text-[25px] font-bold tracking-wide">We know how large objects will act,<br /> but things on a small scale.</p>

        <section className="flex flex-row gap-3">
          <button className="btn-primary">BUY NOW</button>
          <button className="btn-secondary">READ MORE</button>
        </section>
      </div>
    </div>
  );
}

export default Article;
