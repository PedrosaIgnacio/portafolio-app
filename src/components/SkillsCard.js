import React from "react";
import { Card } from "react-bootstrap";
import SkillElement from "./SkillElement";
import {
  SiCsharp,
  SiJavascript,
  SiPython,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { AiOutlineConsoleSql, AiFillGithub } from "react-icons/ai";
const SkillsCard = () => {
  return (
    <>
      <Card style={{ borderRadius: "15px" }} className="shadow-lg p-3 mb-5">
        <Card.Title className="text-center">
          <p className="h2">SKILSS</p>
        </Card.Title>
        <Card.Body className="d-flex justify-content-center flex-wrap">
          <div className="m-4">
            <SkillElement icon={<FaBootstrap />} />
          </div>
          <div className="m-4">
            <SkillElement icon={<SiCsharp />} />
          </div>
          <div className="m-4">
            <SkillElement icon={<AiOutlineConsoleSql />} />
          </div>
          <div className="m-4">
            <SkillElement icon={<SiJavascript />} />
          </div>
          <div className="m-4">
            <SkillElement icon={<SiPython />} />
          </div>
          <div className="m-4">
            <SkillElement icon={<SiCss3 />} />
          </div>
          <div className="m-4">
            <SkillElement icon={<SiHtml5 />} />
          </div>
          <div className="m-4">
            <SkillElement icon={<AiFillGithub />} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SkillsCard;
