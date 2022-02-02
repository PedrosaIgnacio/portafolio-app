import React from 'react'
import NavBar from './components/NavBar'
import CounterApp from './components/CounterApp/CounterApp'
import { Container } from 'react-bootstrap'
import InstagramApp from './components/InstagramApp/InstagramApp'
const TestHooks = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Container className="d-flex">
          <CounterApp />
          <InstagramApp />
        </Container>
      </div>
    </>
  )
}

export default TestHooks
