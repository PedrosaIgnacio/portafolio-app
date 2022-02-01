import React from 'react'
import { Card } from 'react-bootstrap'

const LocationCard = () => {
  return (
    <Card style={{ borderRadius: '15px' }} className="shadow-lg p-3 mb-5">
      <Card.Body>
        <Card.Title>LOCATION</Card.Title>
        <Card.Subtitle className="text-muted mt-2 mb-2">
          ARGENTINA
        </Card.Subtitle>
        <p className="lead">Córdoba, Capital.</p>
      </Card.Body>
    </Card>
  )
}

export default LocationCard
