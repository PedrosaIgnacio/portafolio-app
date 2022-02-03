import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import FormatInput from '../../FormatInput'
import './InputSearch.css'

const InputSearch = () => {
  const [input, setInput] = useState('')

  const handleKeyboardPress = (e) => {
    setInput(e.target.value)
  }

  return (
    <>
      <div className="m-4" style={{ maxWidth: '20vw', minWidth: '20vw' }}>
        <Card style={{ borderRadius: '15px' }} className="shadow-lg p-3 mb-5">
          <Card.Title className="text-center h2">KEYBOARD EVENT</Card.Title>
          <hr style={{ border: 'solid 1px' }} />
          <Card.Body>
            <FormatInput
              type="text"
              placeholder="Write Something"
              name="Write Something"
              onchange={handleKeyboardPress}
              size="40"
            />
            <div className="d-flex justify-content-center flex-wrap form-group mt-2">
              <p
                className="lead"
                style={{
                  fontSize: '25px',
                  whiteSpace: 'initial',
                  overflow: 'hidden',
                }}
              >
                {input}
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default InputSearch
