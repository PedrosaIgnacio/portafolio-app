import React from "react";
import { Card } from "react-bootstrap";
import {
  AiOutlineWhatsApp,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import SocialMediaElement from "./SocialMediaElement";

const SocialMediaCard = () => {
  const socialMedia = [
    {
      icon: <AiOutlineWhatsApp />,
      socialName: "WhatsApp",
      url: "https://wa.link/ltqez5",
    },
    {
      icon: <AiFillTwitterCircle />,
      socialName: "Twitter",
      url: "https://twitter.com/NaachoPedrosa",
    },
    {
      icon: <AiFillLinkedin />,
      socialName: "Linkedin",
      url: "https://www.linkedin.com/in/ignacio-pedrosa-262134190/",
    },
  ];
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {socialMedia.map((e) => (
        <SocialMediaElement
          icon={e.icon}
          socialName={e.socialName}
          url={e.url}
        />
      ))}
    </div>
  );
};

export default SocialMediaCard;
