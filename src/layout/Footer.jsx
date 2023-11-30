import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col ">
      <div className=" px-[195px] bg-transparent-grey">
        <div className="flex flex-row items-center py-[40px] gap-[577.5px]">
          <div className="py-[13px] pr-[49px]">
            <Link
              className="text-dark-blue font-bold text-[24px] font-['Montserrat'] leading-[32px]"
              to="/"
            >
              Bandage
            </Link>
          </div>

          <div className=" flex flex-row justify-center gap-[20px]">
            <a href="https://facebook.com" target="_blank">
              <FontAwesomeIcon icon={faFacebook} size="xl" color="#23A6F0" />
            </a>
            <a href="https://instagram.com" target="_blank">
              {" "}
              <FontAwesomeIcon icon={faInstagram} size="xl" color="#23A6F0" />
            </a>
            <a href="https://twitter.com" target="_blank">
              {" "}
              <FontAwesomeIcon icon={faTwitter} size="xl" color="#23A6F0" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start font-['Montserrat'] font-[700] text-[14px] gap-[30px] px-[195px] py-[50px]">
        <div className="flex flex-col gap-[20px] w-[148px] leading-normal tracking-tight">
          <p className="text-[#252B42]">Company Info</p>

          <div className="flex flex-col text-md-grey gap-[10px]">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-[148px] leading-normal tracking-tight">
          <p className="text-[#252B42]">Legal</p>

          <div className="flex flex-col text-md-grey gap-[10px]">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-[148px] leading-normal tracking-tight">
          <p className="text-[#252B42]">Features</p>

          <div className="flex flex-col text-md-grey gap-[10px]">
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-[148px] leading-normal tracking-tight">
          <p className="text-[#252B42]">Resources</p>

          <div className="flex flex-col text-md-grey gap-[10px]">
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>Blog</p>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] w-[148px] leading-normal tracking-tight font-['Montserrat']">
          <p className="text-[#252B42]">Get In Touch</p>
          <div>
          <form action="submit" className="flex flex-row">
            <input className="border-r-[0px] border-l-[1px] border-y-[1px]  border-mdl-grey rounded-l py-[15px] text-[14px] pl-[20px] font-[400] bg-[#F9F9F9]" type="text" placeholder="Your Email"/>
            <button className="btn-third rounded-r font-normal">Subscribe</button>
          </form>
          <p className="text-[12px] font-[500] text-md-grey ">Lorem Ipsum Dolor Sit</p>
          </div>
          
        </div>
      </div>

      <div className="bg-transparent-grey px-[195px]">
        <p className="font-['Montserrat'] text-md-grey font-[700] text-[14px] leading-[24px] py-[25px]">
          Made With Love By Finland All Right Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
