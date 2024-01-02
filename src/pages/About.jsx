import React from "react";

import AboutHero from "../components/about/AboutHero";
import TeamSection from "../components/about/TeamSection";
import SuccessRate from "../components/about/SuccessRate";
import AboutTextArea from "../components/about/AboutTextArea";
import Companies from "../components/about/Companies";
import { Link } from "react-router-dom/";

function About() {
  return (
    <div className="flex flex-col justify-center">
      <AboutHero />
      <AboutTextArea />
      <SuccessRate />
      <img className="m-auto p-[40px] md:p-[0px]" src="/assets/Videocard.png" alt="" />
      <TeamSection />
      <Companies />
    </div>
  );
}

export default About;
