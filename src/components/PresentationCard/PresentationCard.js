import React from "react";
import { Button, Card } from "react-bootstrap";
import toast from "react-hot-toast";
import CardImage from "../../img/cardimage.jpeg";
import LocationCard from "./LocationCard";

const Cards = () => {
  const downloadClick = () => {
    downloadPDF()
      .then(() => {
        toast.success("Downloaded");
      })
      .catch(() => {
        toast.error("Download Failed, try again later");
      });
  };
  const downloadPDF = async () => {
    new Promise((resolve, reject) => {
      let a = document.createElement("a");
      a.href = "./PDF/Ignacio_Pedrosa_CVV.docx.pdf";
      a.download = "PedrosaIgnacio";
      a.click();
      resolve();
    });
  };

  return (
    <div className="m-4">
      <Card
        style={{
          borderRadius: "15px",
        }}
        className="shadow-lg p-3 mb-5"
      >
        <div>
          <Card.Img
            variant="top"
            src={CardImage}
            className="img-responsive rounded-circle mx-auto mt-2 mb-4 p-3"
          />
        </div>
        <Card.Body>
          <div className="d-flex justify-content-center">
            <hr style={{ border: "solid 1px", width: "100%" }} />
          </div>
          <Card.Title className="mb-2">
            NATIONAL TECHNOLOGICAL UNIVERSITY
          </Card.Title>
          <p className="lead">I'm a Systems Engineering student (3rd Year)</p>
          <Card.Subtitle className="my-2">ENCODE SA</Card.Subtitle>
          <p className="lead">Full Stack Developer</p>
          <Button variant="dark" className="lead " onClick={downloadClick}>
            <a>DOWNLOAD CV</a>
          </Button>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <LocationCard />
      </div>
    </div>
  );
};

export default Cards;
