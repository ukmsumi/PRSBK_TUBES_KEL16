import React from "react";
import { Card } from "../../components/";
import "./about.scss";
import UmiPhoto from "../../assets/Umi.jpg";
import IrfanPhoto from "../../assets/Irfan.jpg";

const About = () => {
  return (
    <div className="about-wrapper">
      <Card nama="Umi Khoiryatin M S" nim="21120117120005" photo={UmiPhoto} />
      <Card nama="M Irfan Syarif H" nim="21120117120014" photo={IrfanPhoto} />
    </div>
  );
};

export default About;
