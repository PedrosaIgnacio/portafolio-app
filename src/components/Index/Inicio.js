import React from 'react'
import NavBar from '../Navbar/NavBar'
import PresentationCard from './PresentationCard/PresentationCard'
import { Container } from 'react-bootstrap'
import AboutMeCard from './AboutMeCard/AboutMeCard'
const Inicio = () => {
  return (
    <>
      <div className="cont">
        <NavBar />
        <div className="container-fluid">
          <Container className="d-flex">
            <PresentationCard />
            <AboutMeCard />
          </Container>
        </div>
      </div>
    </>
  )
}
export default Inicio
