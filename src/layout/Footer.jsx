import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="flex flex-col">
      <section className="flex flex-row justify-between px-56 py-10  bg-light-grey">
        <div>
          <p className="text-slate font-monsterrat font-bold text-[24px]">BrandName</p>
        </div>

        <div className=" flex flex-row gap-3">
          <FontAwesomeIcon icon={faFacebook} size="2x" color="#23A6F0" />
          <FontAwesomeIcon icon={faInstagram} size="2x" color="#23A6F0" />
          <FontAwesomeIcon icon={faTwitter} size="2x"color="#23A6F0" />
        </div>
      </section>

      <section className="flex flex-row items-center justify-between px-56 py-10 font-monstrrat bold font-bold text-light-grey">
        <div className="flex flex-col gap-3">
          <p className="text-[#252B42] mb-2">Company Info</p>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
         
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#252B42] mb-2">Legal</p>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#252B42] mb-2">Features</p>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[#252B42] mb-2">Resources</p>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>Blog</p>
        </div>
        <div>

        </div>


        
      </section>


    </footer>
  );
}

export default Footer;
