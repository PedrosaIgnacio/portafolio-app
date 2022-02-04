import React from 'react'
import MailCard from './MailCard/MailCard'
import NavBar from '../Navbar/NavBar'
import QrCard from './QR/QrCard'
import SocialMediaCard from './SocialMedia/SocialMediaCard'

const Contacto = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid d-flex justify-content-center flex-wrap">
        <div className="col-md-6">
          <MailCard />
        </div>
        <hr style={{ border: 'solid 1px', width: '75%' }} />
        <div className="col-md-6">
          <SocialMediaCard />
        </div>
        <hr style={{ border: 'solid 1px', width: '75%' }} />
        <div className="col-md-6">
          <QrCard />
        </div>
      </div>
    </>
  )
}
export default Contacto
