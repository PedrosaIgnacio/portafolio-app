import React from 'react'
import { Card } from 'react-bootstrap'
import CardImage from '../img/cardimage.jpeg'
import LocationCard from './LocationCard'

const Cards = () => {
  return (
    <div className="m-4">
      <Card
        style={{
          borderRadius: '15px',
        }}
        className="shadow-lg p-3 mb-5"
      >
        <Card.Img
          style={{ borderRadius: '12rem' }}
          variant="top"
          src={CardImage}
          className="img-responsive mx-auto mt-2 mb-4"
        ></Card.Img>
        <Card.Body>
          <Card.Subtitle className="mb-2">
            NATIONAL TECHNOLOGICAL UNIVERSITY
          </Card.Subtitle>
          <p className="lead">I'm a Systems Engineering student (3rd Year)</p>
          <Card.Subtitle className="mb-2 mt-2">ENCODE SA</Card.Subtitle>
          <p className="lead">Full Stack Developer</p>
        </Card.Body>
      </Card>
      <div className="mt-4">
        <LocationCard />
      </div>
    </div>
  )
}

export default Cards
