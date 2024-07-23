import React from 'react'
import Left from './Left'
import Right from './Right'
import { Col, Container, Row } from 'react-bootstrap'
import './home.css'
import Skill from './Skill'
import Skil from './Skil'
import Portfolio from './Portfolio'
import Footer from './Footer'

const Home = () => {
  return (

    <div className='back'>
      <Container >
      <Row className='justify-content-md-centre' style={{paddingTop:'50px'}}  >
        <Col style={{paddingTop:'30px'}} >
          <Left></Left></Col>
        <Col><Right ></Right></Col>
      </Row>
      <Row style={{paddingTop:'80px', margin:'30px'}}>
        <Col>
    <Skill />
    </Col>
    </Row>
    <Row className='justify-content-md-centre' style={{paddingTop:'100px', margin:'30px'}} >
    <Skil />
    </Row>
    <Row>
      <Portfolio/>
    </Row>
   
    </Container>
   
       <Footer/>
    
    </div>
  )
}

export default Home