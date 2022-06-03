import React from "react";
import { Button, Card } from "react-bootstrap";
import toast from "react-hot-toast";
import CardImage from "../../../img/cardimage.jpeg";
import "./PresentationCard.css";

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
    <div className="m-4 presentationContainer">
      <Card
        style={{
          borderRadius: "15px",
        }}
        className="shadow-lg p-3 mb-5 cardd presentationCard"
      >
        <Card.Title className="text-center">
          <p className="h2">PRESENTATION</p>
          <div className="d-flex justify-content-center">
            <hr style={{ border: "solid 1px", width: "75%" }} />
          </div>
        </Card.Title>
        <div className="d-flex justify-content-center">
          <Card.Img
            variant="top"
            src={CardImage}
            className="rounded-circle mx-auto mt-2 mb-4"
            style={{ height: "50%", width: "50%", margin: "auto" }}
          />
        </div>
        <Card.Body>
          <hr style={{ border: "solid 1px" }} />
          <Card.Title className="mb-2 transparent">
            NATIONAL TECHNOLOGICAL UNIVERSITY
          </Card.Title>
          <p className="lead">I'm a Systems Engineering student (3rd Year)</p>
          <Card.Subtitle className="my-2">Encode SA</Card.Subtitle>
          <p className="lead">Full Stack Developer</p>
          <Card.Subtitle className="my-2">Freelance</Card.Subtitle>
          <p className="lead">Full Stack Developer</p>
          <Button variant="dark" className="lead" onClick={downloadClick}>
            <a style={{ textDecoration: "none", color: "white" }} href>
              DOWNLOAD CV
            </a>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
