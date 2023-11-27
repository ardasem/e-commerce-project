import React from "react";

function EditorsPick() {
  return (
    <div className="flex flex-col justify-center items-center p-10 bg-[#FAFAFA]">
    
        <p className="text-monsterrat text-[24px] font-bold">EDITOR'S PICK</p>
        <p className="text-monsterrat text-[14px] font-bold text-md-grey">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      <div className="flex flex-row justify-center gap-3 m-5">

        <div className="relative">
          <img className="w-full" src="/assets/men.png" alt="" />
          <p className="absolute bottom-[1px] left-[70px] transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold bg-white  px-[30px] py-2">MEN</p>
        </div>

      
        <div className="relative">
          <img className="w-full" src="/assets/women.png" alt="" />
          <p className="absolute bottom-[1px] left-[80px] transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold bg-white  px-[30px] py-2">WOMEN</p>
        </div>


        <div className="flex flex-col gap-3 ">
         
        <div className="relative">
          <img className="w-full" src="/assets/accesories.png" alt="" />
          <p className="absolute bottom-[1px] left-[80px] transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold font-monsterrat bg-white  px-[10px] py-2">ACCESORIES</p>
        </div>
        
        <div className="relative">
          <img className="w-full" src="/assets/kids.png" alt="" />
          <p className="absolute bottom-[1px] left-[70px] transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold font-monsterrat bg-white  px-[30px] py-2">KIDS</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default EditorsPick;
