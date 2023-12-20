import React from "react";
import ContactCard from "./ContactCard";

function ContactSection() {
  return (
    <div className="flex flex-col px-[195px] justify-center gap-[80px] py-[112px]">
        
      <div className="flex flex-col gap-[10px] text-center">
        <h6 className='font-["Montserrat"] font-[700] text-[14px] text-dark-blue'>VISIT OUR OFFICE</h6>
        <h2 className='font-["Montserrat"] font-[700] text-[40px] text-dark-blue'>We help small businesses with big ideas</h2>
      </div>

      <div className="flex flex-row">
        <ContactCard
          bgColor={"#FFFFFF"}
          mailOne={"georgia.young@example.com"}
          mailTwo={"georgia.young@ple.com"}
          cardStyle={1}
          fontColor={"dark-blue"}
        />

        <ContactCard
          bgColor={"dark-blue"}
          mailOne={"georgia.young@example.com"}
          mailTwo={"georgia.young@ple.com"}
          cardStyle={2}
          fontColor={"white"}
        />

        <ContactCard
          bgColor={"#FFFFFF"}
          mailOne={"georgia.young@example.com"}
          mailTwo={"georgia.young@ple.com"}
          cardStyle={3}
          fontColor={"dark-blue"}
        />
      </div>
    </div>
  );
}

export default ContactSection;
