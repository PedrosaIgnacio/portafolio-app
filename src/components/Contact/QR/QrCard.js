import React from 'react'
import QR from '../../../img/QR.png'
const QrCard = () => {
  return (
    <div className="row justify-content-center mb-4">
      <p className="h2 text-center">OR</p>
      <div className="mt-4">
        <p className="h2 text-center">
          <a
            className="text-decoration-none"
            href="https://linktr.ee/nachopedrosa"
          >
            Linktree
          </a>
        </p>
      </div>

      <img src={QR} alt="" style={{ height: '12rem', width: '12rem' }} />
    </div>
  )
}

export default QrCard
