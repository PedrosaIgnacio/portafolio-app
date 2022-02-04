import React from 'react'
import NavBar from '../Navbar/NavBar'
import CounterApp from './CounterApp/CounterApp'
import { Container } from 'react-bootstrap'
import InputSearch from './InputSearch/InputSearch'
import FormikForm from './TestFormik/FormikForm'
const TestHooks = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Container className="row flex-wrap">
          <div className="row">
            <div className="col-md-4">
              <CounterApp />
            </div>
            <div className="col-md-4">
              <InputSearch />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <FormikForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default TestHooks
