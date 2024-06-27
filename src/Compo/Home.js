import React from 'react'
import Left from './Left'
import Right from './Right'
import { Col, Container, Row } from 'react-bootstrap'
import './home.css'

const Home = () => {
  return (

    <Container >
      <Row className='justify-content-md-center'>
        <Col >
          <Left></Left></Col>
        <Col><Right ></Right></Col>
      </Row>

    </Container>
  )
}

export default Home