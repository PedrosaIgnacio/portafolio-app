import React from 'react'
import NavBar from '../Navbar/NavBar'
import PresentationCard from './PresentationCard/PresentationCard'
import AboutMeCard from './AboutMeCard/AboutMeCard'
import SkillsCard from './Skills/SkillsCard'
import LocationCard from './Location/LocationCard'
import { Container } from 'react-bootstrap'
import './inicio.css'
const Inicio = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Container className="d-flex flex-wrap">
          <div className="row">
            <div className="col-md-5">
              <PresentationCard className="indexCard" />
            </div>
            <div className="col-md-7">
              <AboutMeCard />
              <LocationCard />
            </div>
          </div>
          <div className="a">
            <div className="col-auto">
              <SkillsCard />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
export default Inicio
