import React from "react";
import QR from "../img/QR.png";
const QrCard = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={QR} alt="" style={{ height: "20rem", width: "20rem" }} />
    </div>
  );
};

export default QrCard;
