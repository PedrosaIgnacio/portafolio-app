import React from 'react'
const SkillCard = ({ icon, iconName }) => {
  return (
    <div className="m-4 text-center col-md-2" id="items">
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
