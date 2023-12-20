import React from "react";

function EditorsPick() {
  return (
    <div className="flex flex-col justify-center items-center pt-[80px] pb-[48px]  bg-[#FAFAFA]">
      <div className="flex flex-col items-center justify-center gap-[10px]">
        <p className="font-['Montserrat'] text-[24px] font-[700] text-dark-blue">EDITOR'S PICK</p>
        <p className="font-['Montserrat'] text-[14px] font-[400] text-md-grey text-center">
          Problems trying to resolve the conflict between         </p>
      </div>

      <div className="flex flex-row justify-center gap-3 m-5">
        <div className="relative">
          <img className="w-full" src="/assets/men.png" alt="" />
          <p className="absolute bottom-[1px] left-[70px] transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold bg-white  px-[30px] py-2">
            MEN
          </p>
        </div>

        <div className="relative">
          <img className="w-full" src="/assets/women.png" alt="" />
          <p className="absolute bottom-[1px] left-[80px] transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold bg-white  px-[30px] py-2">
            WOMEN
          </p>
        </div>

        <div className="flex flex-col gap-3 ">
          <div className="relative">
            <img className="w-full" src="/assets/accesories.png" alt="" />
            <p className="absolute bottom-[1px] left-[80px] transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold font-['Montserrat'] bg-white  px-[10px] py-2">
              ACCESORIES
            </p>
          </div>

          <div className="relative">
            <img className="w-full" src="/assets/kids.png" alt="" />
            <p className="absolute bottom-[1px] left-[70px] transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold font-['Montserrat'] bg-white  px-[30px] py-2">
              KIDS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorsPick;
