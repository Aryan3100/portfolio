import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import node from './nodejs.webp'
import react from './react.svg'
import js from './javascript.webp'
import css from './css.webp'
import html from './html.webp'
import typ from './typescript2034.jpg'

const Skil = () => {
  return (
    <Container>
      <Row >
      <Col  >
        <h1 style={{display:'flex', alignItems:'center', justifyContent:"center", }}>HERE'S WHAT I'M GOOD AT</h1>
        <h3 style={{display:'flex', alignItems:'center', justifyContent:"center" }}>These are the thecnoogies I have been working with</h3>
        </Col>
      </Row>
      <Row className='mt-5' >
        <Col>
        <Card style={{ width: '18rem', display:'flex' ,alignItems:'center' }}>
      <Card.Img className='mt-5' variant="top" src={react} style={{width:'150px'}}/>
      <Card.Body >
        <Card.Title className='d-flex justify-content-center'>REACT JS</Card.Title>
        <Card.Text>
        React is a JavaScript library for building user interfaces and most popular library for building user interfaces.
        </Card.Text>
       
      </Card.Body>
    </Card>

        </Col>
        <Col>
        <Card style={{ width: '18rem', display:'flex' ,alignItems:'center' }}>
      <Card.Img className='mt-5' variant="top" src={js} style={{width:'150px'}} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-center'>JAVASCRIPT</Card.Title>
        <Card.Text>
        JavaScript is the world's most misunderstood programming language.
        </Card.Text>
        
      </Card.Body>
    </Card>

        </Col>
        <Col  >
        <Card style={{ width: '18rem', display:'flex' ,alignItems:'center', }}>
      <Card.Img className='mt-5' variant="top" src={node} style={{width:'200px'}}  />
      <Card.Body>
        <Card.Title className='d-flex justify-content-center'>NODE JS</Card.Title>
        <Card.Text className='mt-4 mb-4'>
        Node Js is a JavaScript runtime built on Chrome's V8 JavaScript.
        </Card.Text>
       
      </Card.Body>
    </Card>

        </Col>
       
      </Row>
      <Row className='mt-5'>
        
        <Col >
        <Card style={{ width: '18rem', display:'flex' ,alignItems:'center' }}>
      <Card.Img className='mt-5' variant="top" src={html} style={{width:'150px'}} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-center'>HTML 5</Card.Title>
        <Card.Text>
        HTML5 is the latest evolution of the standard that defines HTML.
        </Card.Text>
        
      </Card.Body>
    </Card>

        </Col>
        <Col >
        <Card style={{ width: '18rem', display:'flex' ,alignItems:'center' }}>
      <Card.Img className='mt-5' variant="top" src={css} style={{width:'110px'}} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-center'>HTML 5</Card.Title>
        <Card.Text>
        HTML5 is the latest evolution of the standard that defines HTML.
        </Card.Text>
        
      </Card.Body>
    </Card>

        </Col>
        <Col >
        <Card style={{ width: '18rem', display:'flex' ,alignItems:'center' }}>
      <Card.Img className='mt-5' variant="top" src={typ} style={{width:'200px'}} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-center'>TYPESCRIPT</Card.Title>
        <Card.Text>
        TypeScript is JavaScript with added syntax for types.
        </Card.Text>
        
      </Card.Body>
    </Card>

        </Col>
      </Row>
    </Container>
  )
}

export default Skil