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
        <div className="flex flex-row items-center p-[40px] gap-[577.5px]">
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

      <section className="flex flex-row items-center justify-between px-56 py-10 font-['Montserrat'] font-bold text-light-grey">
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

        <div className="flex flex-col justify-start items-start gap-3">
          <p className="text-[#252B42] mb-2">Get In Touch</p>
          <form action="submit" className="flex flex-row">
            <input className="border rounded-l" type="text" />
            <button className="btn-third rounded-r">Submit</button>
          </form>
          <p>Lorem Ipsum</p>
        </div>
      </section>

      <section className="bg-transparent-grey px-56 py-6">
        <p className="font-['Montserrat'] text-grey font-bold text-[14px]">
          Made With Love By Finland All Right Reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
