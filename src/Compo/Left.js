import React, { useState } from 'react'
import { Button, Col, Container, Image, Offcanvas, Row } from 'react-bootstrap'
import qr from './bing_generated_qrcode.png'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
import { Link } from 'react-alice-carousel'

const Left = () => {
  
  const [sho , setShow] = useState(false)

  const showCanva = () => {
     setShow(true)
  }
  const hideCanva = () => {
     setShow(false)
  }

  return (
   <Container>
      <Row className="justify-content-md-center">
         <Col>
         <h1 style={{color:'white', paddingTop:"50px", fontSize:'50px'}}>I'am <span>Aryan Panday</span></h1>
       <p style={{color:'white'}}>Front-end Devloper</p>
       <Button variant='primary' onClick={showCanva} >Contact ME </Button>
      <Row className='mt-3' style={{color:'white' ,margin:7}}>
         Let's Connect 
      <Col style={{marginLeft:10}}>
      <a href='https://github.com/Aryan3100'><BsGithub style={{color:'white' ,margin:10}}/></a>
         <a href='https://www.linkedin.com/in/aryan-panday-536639201/' ><BsLinkedin  style={{color:'white' ,margin:10}}/></a>
<a href='https://www.instagram.com/iaryanpanday/'><BsInstagram style={{color:'white' ,margin:10}}/></a>
       </Col>
      </Row>
        <Offcanvas show={sho} placement='end' onHide={hideCanva} >
       <Offcanvas.Header closeButton>
        <Offcanvas.Title>Contact Detail</Offcanvas.Title>
       </Offcanvas.Header>
       <Offcanvas.Body >
        <Image className='mx-auto d-block mt-5' src={qr}></Image>
        <h1 className='text-center '>Scan Me </h1>
       </Offcanvas.Body>
    </Offcanvas>
    
         </Col>
      </Row>
   </Container>
    

  )
}

export default Left