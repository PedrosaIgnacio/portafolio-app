import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useCounter } from './CounterHook'
const CounterApp = () => {
  const { state, increment, decrement, reset } = useCounter(0)

  const [input, setInput] = useState(0)

  const valueInput = (e) => {
    if (e.target.value !== '') {
      setInput(e.target.value)
    } else {
      setInput(0)
    }
  }

  return (
    <div className="m-4">
      <Card style={{ borderRadius: '15px' }} className="shadow-lg p-3 mb-5">
        <Card.Title className="text-center h2">COUNTER APP</Card.Title>

        <hr style={{ border: 'solid 1px' }} />

        <Card.Body>
          <div className=" mb-4 col-auto form-group">
            <input
              type="number"
              placeholder="Value to Add o Sus"
              className="form-control"
              id="val"
              onChange={valueInput}
            />
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-outline-dark col-md-2"
              onClick={() => {
                if (Number(input) !== 0) {
                  decrement(Number(input))
                } else {
                  decrement(1)
                }
              }}
            >
              -
            </button>
            <h1 className="lead mx-4 ">{state}</h1>
            <button
              className="btn btn-outline-dark col-md-2"
              onClick={() => {
                if (Number(input) !== 0) {
                  increment(Number(input))
                } else {
                  increment(1)
                }
              }}
            >
              +
            </button>
          </div>
          <div className="m-4 row">
            <button className="btn btn-dark lead" onClick={reset}>
              RESET VALUE
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CounterApp
