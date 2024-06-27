import React, { useState } from 'react'
import { Navbar , Container , Nav, NavDropdown, Image, Offcanvas, Button} from 'react-bootstrap'
import ar from './Adeline.png'
import qr from './bing_generated_qrcode.png'

const Header = () => {

     const [sho , setShow] = useState(true)

     const showCanva = () => {
        setShow(true)
     }
     const hideCanva = () => {
        setShow(false)
     }
 
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <Image className='' height='80vh' src={ar} ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant='secondary' onClick={showCanva} >Contact ME </Button>
      </Container>
    </Navbar>
    <Offcanvas show={sho} placement='end' onHide={hideCanva} >
       <Offcanvas.Header closeButton>
        <Offcanvas.Title>Contact Detail</Offcanvas.Title>
       </Offcanvas.Header>
       <Offcanvas.Body >
        <Image className='mx-auto d-block mt-5' src={qr}></Image>
        <h1 className='text-center '>Scan Me </h1>
       </Offcanvas.Body>
    </Offcanvas>

    </div>
  )
}

export default Header