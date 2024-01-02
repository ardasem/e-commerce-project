import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function ContactHero() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center  gap-[30px] mx-[195px]">
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-[35px] font-['Montserrat'] font-bold ">
        
        <p className="text-[16px] font-[700] text-dark-blue">CONTACT US</p>
        <p className="text-[58px] font-[700] text-dark-blue">
          Get in touch today!
        </p>
        <p className="text-[20px] font-[400] text-md-grey">
          We know how large objects will act,
          <br /> but things on a small scale
        </p>

        <p className="text-dark-blue">Phone : +451 215 215 </p>
        <p className="text-dark-blue">Fax : +451 215 215 </p>

        <div className=" flex flex-row gap-[34px]">
          <a href="https://facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="xl" color="#252B42" />
          </a>
          <a href="https://instagram.com" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faInstagram} size="xl" color="#252B42" />
          </a>
          <a href="https://twitter.com" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faTwitter} size="xl" color="#252B42" />
          </a>
          <a href="https://twitter.com" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} size="xl" color="#252B42" />
          </a>
        </div>
      </div>

      <div>
        <img src="/assets/contact-hero.png" alt="" />
      </div>
    </div>
  );
}

export default ContactHero;
