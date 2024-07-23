import React from 'react'
import { Col, Container, ListGroup, ProgressBar, Row } from 'react-bootstrap'

const Skill = () => {
  return (
    <Container className='mt-5 pt-5'>
      <Row className="justify-content-md-center" >
        <Col >
          <h1>
            Who Am I?
          </h1>
          <h2>i am Aryan panday and i am frontend devloper</h2>
          <p>I recently began to be fascinated by web programming. e.g. developing web apps
             and build websites. Results-oriented Front-end Developer dedicated to creating and optimizing 
             interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong 
             attention to detail in order to deliver original and efficient
             web solutions, provide technical knowledge and expertise, build new websites from start to finish.</p>
        </Col>
        <Col >
          
              <ListGroup className='border border-white border-1' >
            <ListGroup.Item>REACT.JS<ProgressBar style={{marginTop:'10px', borderStyle:'none',marginBottom:'10px'}} now={71} variant="warning" /></ListGroup.Item>
            <ListGroup.Item>JAVASCRIPT<ProgressBar style={{marginTop:'10px', borderStyle:'none',marginBottom:'10px'}} now={80} variant="warning" /></ListGroup.Item>
            <ListGroup.Item>HTML<ProgressBar style={{marginTop:'10px', borderStyle:'none',marginBottom:'10px'}} now={84} variant="warning" /></ListGroup.Item>
            <ListGroup.Item>CSS<ProgressBar style={{marginTop:'10px', borderStyle:'none', marginBottom:'10px'}} now={84} variant="warning" /></ListGroup.Item>

          </ListGroup>
              
        </Col>

      </Row>
    </Container>

  )
}

export default Skill