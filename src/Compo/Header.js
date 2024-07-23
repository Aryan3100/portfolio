import React, { useState } from 'react'
import { Navbar , Container , Nav, NavDropdown, Image, Offcanvas, Button} from 'react-bootstrap'
import ar from './Adeline.png'


const Header = () => {

   
 
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home">
            <Image className='' height='80vh' src={ar} ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto xs lg=2 " style={{margin:'10px'}} >
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Work</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">Statics</Nav.Link>

          
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
   

    </div>
  )
}

export default Header