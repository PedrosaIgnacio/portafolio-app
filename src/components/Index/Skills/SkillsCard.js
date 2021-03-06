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
import { FaBootstrap, FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { DiGit } from "react-icons/di";
import "./SkillsCard.css";
const SkillsCard = () => {
  const test = [
    { key: "Bootstrap", icon: <FaBootstrap /> },
    { key: "C#", icon: <SiCsharp /> },
    { key: "Git", icon: <DiGit /> },
    { key: "Sql Server", icon: <AiOutlineConsoleSql /> },
    { key: "Javascript", icon: <SiJavascript /> },
    { key: "Python", icon: <SiPython /> },
    { key: "CSS", icon: <SiCss3 /> },
    { key: "HTML", icon: <SiHtml5 /> },
    { key: "React Js", icon: <FaReact /> },
  ];
  return (
    <div className="m-4">
      <Card
        style={{ borderRadius: "15px" }}
        className="shadow-lg p-3 mb-5 cardd"
      >
        <Card.Title className="text-center">
          <p className="h2">SKILLS</p>
          <div className="d-flex justify-content-center">
            <hr style={{ border: "solid 1px", width: "75%" }} />
          </div>
        </Card.Title>
        <Card.Body className="row justify-content-center flex-wrap">
          {test.map((el) => (
            <SkillElement icon={el.icon} iconName={el.key} key={el.key} />
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SkillsCard;
