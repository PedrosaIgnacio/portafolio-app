import React from "react";

const SocialMediaElement = ({ icon, socialName, url }) => {
  return (
    <div className="m-4 text-center col-md-2" id="items">
      <a href={url} className="text-decoration-none" style={{ color: "black" }}>
        <h1>{icon}</h1>
        <p className="lead">
          <strong>{socialName}</strong>
        </p>
      </a>
    </div>
  );
};

export default SocialMediaElement;
