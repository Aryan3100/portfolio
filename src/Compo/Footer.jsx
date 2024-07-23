import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { GiMailbox } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
  
      <Navbar  style={{backgroundColor:'black', padding:20 , marginTop:"100px"}} >
      
        <Navbar.Brand style={{color:'white'}}><MdEmail style={{marginRight:10}}></MdEmail>aryanpanday300@gmail.com</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Row className='mt-3' style={{color:'white'}}>
        
      <Col style={{marginLeft:10}}>
      <a href='https://github.com/Aryan3100'><BsGithub style={{color:'white' ,margin:10}}/></a>
         <a href='https://www.linkedin.com/in/aryan-panday-536639201/' ><BsLinkedin  style={{color:'white' ,margin:10}}/></a>
<a href='https://www.instagram.com/iaryanpanday/'><BsInstagram style={{color:'white' ,margin:10}}/></a>
       </Col>
      </Row>
        </Navbar.Collapse>
    
    </Navbar>
  
  );
}

export default Footer;