import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import cr from './cr.png'
import ch from './ch (1).png'
import ce from './ch (2).png'
import ca from './jj.png'



const Portfolio = () => {
  return (
    <Container className='mt-5' >
        <h1 className=' mt-5 d-flex  justify-content-center'>CHECK OUT MY PORTFOLIO</h1>
        <h2 className='d-flex  justify-content-center'>Here's what I have done with the past</h2>
        <Container>
        <Row className='mt-5'>
            <Col >
            <a href='https://chipper-beijinho-5719dd.netlify.app/'><Image src={cr} fluid /></a>
            </Col>
            <Col>
          <a href='https://merry-jelly-5191ba.netlify.app/'>  <Image src={ch} fluid /></a>           </Col>
          
        </Row>
        </Container>
       <Container>
       <Row className='mt-5'>
        <Col>
            <a href='https://prismatic-squirrel-cb116c.netlify.app/'><Image src={ca} fluid /></a>
            </Col>
            <Col>
            <a href='https://admirable-nasturtium-94430c.netlify.app/'> <Image src={ce} fluid /></a>
            </Col>
        </Row>
       </Container>
    </Container>
  )
}

export default Portfolio