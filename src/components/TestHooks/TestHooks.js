import React from 'react'
import NavBar from '../Navbar/NavBar'
import CounterApp from './CounterApp/CounterApp'
import { Container } from 'react-bootstrap'
import InputSearch from './InputSearch/InputSearch'
const TestHooks = () => {
  return (
    <div className="cont">
      <NavBar />
      <div className="container-fluid">
        <Container className="d-flex">
          <CounterApp />
          <InputSearch />
        </Container>
      </div>
    </div>
  )
}

export default TestHooks
