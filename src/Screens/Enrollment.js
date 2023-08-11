import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Enrollment() {
  return (
    <>
  <Container className='text-center ps-5 mx-auto'>
    <h1 className='mt-5' style={{fontFamily: "'Stylish', sans-serif",fontSize:"3rem"}}>Enrollment Process</h1>
    <Row className='text-center container ps-5'>
        <Col md={3} className='mt-5'>
        <div className='' style={{width:"200px",height:"200px",borderRadius:"50%",backgroundColor:"lightblue"}}>
            <div className='d-flex justify-content-center align-items-center p-3'>
            <p className='' style={{color:"black",marginTop:"50px",fontSize:"1.3rem"}}> <b>Fill the <br /> Application </b></p>
         </div>         
        </div>
        </Col>
        <Col md={3} className='mt-5'>
        <div className='' style={{width:"200px",height:"200px",borderRadius:"50%",backgroundColor:"orange"}}>
            <div className='d-flex justify-content-center align-items-center p-4'>
            <p className='' style={{color:"black",marginTop:"50px",fontSize:"1.3rem"}}> <b>Take Enrollment Test </b></p>

            </div>
         
        </div>
        </Col>
        <Col md={3} className='mt-5'>
        <div className='' style={{width:"200px",height:"200px",borderRadius:"50%",backgroundColor:"wheat"}}>
            <div className='d-flex justify-content-center align-items-center p-4'>
            <p className='' style={{color:"black",marginTop:"50px",fontSize:"1.3rem"}}> <b>Attend Sessions</b></p>

            </div>
         
        </div>
        </Col>
        <Col md={3} className='mt-5'>
        <div className='' style={{width:"200px",height:"200px",borderRadius:"50%",backgroundColor:"lightgreen"}}>
            <div className='d-flex justify-content-center align-items-center p-3'>
            <p className='' style={{color:"black",marginTop:"50px",fontSize:"1.3rem"}}> <b>Course Enrollment </b></p>

            </div>
         
        </div>
        </Col>
    </Row>
  </Container>

    </>
  )
}

export default Enrollment