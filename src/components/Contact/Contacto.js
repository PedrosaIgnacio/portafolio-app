import React from 'react'
import { Container } from 'react-bootstrap'
import MailCard from './MailCard'
import NavBar from '../Navbar/NavBar'

const Contacto = () => {
  return (
    <div className="cont">
      <NavBar />
      <div className="container-fluid">
        <Container className="d-flex justify-content-center">
          <MailCard />
        </Container>
      </div>
    </div>
  )
}
export default Contacto