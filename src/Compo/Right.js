import React from 'react'
import im from './Adeline.png'
import { Col, Container, Image, Row } from 'react-bootstrap'
import ab from './sabee.jpg'


const Right = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
      <Col xs={6} md={4}>
          <Image  src={ab} roundedCircle style={{width:'300px', height:'300px', marginRight:'0px'}}/>
        </Col>
      </Row>
    </Container>
   
  )
}

export default Right