import React from "react";
import {
  AiOutlineWhatsApp,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
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
    {
      icon: <AiFillInstagram />,
      socialName: "Instagram",
      url: "https://www.instagram.com/nachopedrosa1/",
    },
  ];
  return (
    <div className="m-4">
      <div className="d-flex justify-content-center flex-wrap">
        {socialMedia.map((e) => (
          <SocialMediaElement
            icon={e.icon}
            socialName={e.socialName}
            url={e.url}
            key={e.socialName}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialMediaCard;
