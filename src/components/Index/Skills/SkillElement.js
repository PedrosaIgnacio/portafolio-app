import React from 'react'
const SkillCard = ({ icon, iconName }) => {
  return (
    <div
      className="m-4 text-center"
      style={{ height: '6rem', width: '10rem' }}
      id="items"
    >
      <div className="flipper">
        <h1>{icon}</h1>
        <p className="lead">
          <strong>{iconName}</strong>
        </p>
      </div>
    </div>
  )
}

export default SkillCard
