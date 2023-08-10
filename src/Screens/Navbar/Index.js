import React from 'react'
import logo from '../../Images/InfynowLogo.png'
import Nav from '../../Images/Nav.png';
import Hamburger from '../../Images/Hamburg.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../../src/Common.css';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa';



function Index() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='navWrapper '>
                <div className='ms-3 mb-5'>
                    <img className='bnt' src={logo} style={{ height: 150, width: 200 }} />
                </div>
                <div className='me-3 mt-4' >
                    {/* <Button variant="primary" onClick={handleShow}>
                        <img src={Hamburger} style={{ height: "10%" }} />
                    </Button> */}
                    <img className='btn' onClick={handleShow} src={Nav} style={{ cursor: 'pointer' }} />

                    <Offcanvas show={show} onHide={handleClose} className='backgroundCanvas w-5'>
                        <Offcanvas.Header closeButton className="headerCanvas">
                            <Offcanvas.Title className='mx-auto' >
                                <img src={logo} style={{ height: 150, width: 200 }} />
                                {/* <hr className='text-light' /> */}
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="text-start ms-3">
                            <a href='#'>Home</a>
                            <br />
                            <br />
                            <a href='#'>About</a>
                            <br />
                            <br />
                            <a href='#'>Services</a>
                            <br />
                            <br />
                            <a href='#'>Internship</a>
                            <br />
                            <br />
                            <a href='#'>Careers</a>
                            <br />
                            <br />
                            <a href='#'>Contact</a>



                            <div className='navIcons'>

                                <div><a href='#'><FaInstagram /></a></div>
                                <div><a href='#'><FaFacebookF /></a></div>
                                <div><a href='#'><FaYoutube /></a></div>
                                <div><a href='#'><FaTwitter /></a></div>
                                <div><a href='#'><FaWhatsapp /></a></div>


                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>


            </div >

        </>
    )
}

export default Index