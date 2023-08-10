import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  FaMobile,
  FaEnvelopeOpen,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const index = () => {
  return (
    <>
      <Container fluid className="text-center mt-3 p-4">
        <div className="container text-start ">
          <h2
            className="text-primary "
            style={{
              fontSize: "5rem",
              background: " -webkit-linear-gradient(#f39b36, #3f66f3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact <span className="text-warning"> Us</span>
            <div
              className="ms-2"
              style={{
                height: 2,
                width: 330,
                background: "linear-gradient(#f39b36, #3f66f3)",
              }}
            ></div>
          </h2>
          <p className="text-light mt-4" style={{ opacity: "0.7" }}>
            Fill Out The form and We'll Be in Touch as Soon as Posible.
          </p>
        </div>

        <Container
          className="container rounded-3 mt-4 bg-light shadow-lg p-4"
          style={{ opacity: "0.8" }}
        >
          <Row>
            <Col md={6} className="mt-3">
              <h2 className="mt-5 fw-bold">
                Get in <span style={{ color: "orange" }}> Touch</span>
              </h2>
              <hr className="w-25 mx-auto" />
              <p className="mt-4 fw-bold">
                Want To Get in Touch! <br />{" "}
                <span>
                  We'd Love To Hear From You, Here's How Can You Reach Us...
                </span>
              </p>

              <div className="d-flex gap-4 justify-content-center shadow-sm rounded-4 mx-auto w-50 fs-3 mt-5 icon">
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  {" "}
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
            </Col>
            <Col md={6} className="shadow-lg rounded-3 p-3">
              <form action="" className="">
                <Row className="mt-3">
                  <Col className="gap-5">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Insert Your Name"
                      className="form-control "
                      style={{ filter: "drop-shadow(2px 2px 2px #000)" }}
                    />
                  </Col>
                  <Col>
                    <input
                      type="email"
                      name="name"
                      id=""
                      placeholder="Insert Your E-mail"
                      className="form-control"
                      style={{ filter: "drop-shadow(2px 2px 2px #000)" }}
                    />
                  </Col>
                </Row>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Insert Your Subject"
                  className="form-control mt-4"
                  style={{ filter: "drop-shadow(2px 2px 2px #000)" }}
                />
                <textarea
                  className="form-control mt-4"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Describe Your Project"
                  style={{ filter: "drop-shadow(2px 2px 2px #000)" }}
                ></textarea>
              </form>
              <div className="text-start">
                <Button
                  variant="primary"
                  className="btn text-center mt-4 rounded-2 fw-bold bt"
                  style={{
                    filter: "drop-shadow(1px 1px 4px #000)",
                    opacity: 0.8,
                  }}
                >
                  Send
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        className="text-light shadow-lg bg-dark p-1 rounded-3"
        style={{ opacity: "0.7" }}
      >
        <Row className="mt-3 text-center ">
          <Col md={4}>
            <FaMobile className="fs-5" />
            <p className="mt-2">
              Call us.. <br /> <span>9513421639</span>
            </p>
          </Col>
          <Col md={4}>
            <MdLocationOn className="fs-3" />
            <p className="mt-2">
              F4 First floor,Star Tower, Near RPD Cross,Tilakwadi Belagavi
              590006
            </p>
          </Col>
          <Col md={4}>
            <FaEnvelopeOpen className="fs-5" />
            <p className="mt-2"> infynow@gmail.com</p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.4293342665446!2d74.50139247493998!3d15.834016645692229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66a455555555%3A0x68be6a454d516476!2sInfynow%20Software%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1690965038459!5m2!1sen!2sin"
          width="100%"
          height="450"
        ></iframe>
      </Container>
    </>
  );
};

export default index;
