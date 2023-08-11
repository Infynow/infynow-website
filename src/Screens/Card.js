import React, { useEffect, useState } from "react";
import "./common.css";
import { Col, Container, Row } from "react-bootstrap";
import video from '../Comonents/images/clg.mp4'
function Card() {
  const student = [
    {
      name: "Sohil Meeranayak",
      image: "https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg",
     Dis: "  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua",
    },
    {
      name: "asad",
      image: "https://i.loli.net/2019/10/18/Ujf6n75o8TtIsWX.jpg",
      Dis: "  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua",
    },
    {
      name: "Aftab",
      image: "https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg",
       Dis: "  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua",
    },
  ];
  const [detail, setDetail] = useState([]);

  const xyz = () => {
    setDetail(student);
  };
  useEffect(() => {
    xyz();
  }, []);
  console.log(detail);
  return (
    <>
      <div>
        <h1
          className="text-center mt-5"
          style={{ fontFamily: "'Stylish', sans-serif", fontSize: "3rem" }}
        >
          {" "}
          Our Placed Students
        </h1>
      </div>
      <Container className="d-flex justify-content-around mx-auto ">
        <div class="container container-main">
          <Row className=" ps-5">
            {detail.map((item) => (
              <Col md={4}>
                <div class="card w-75 text-center">
                  <img src={item.image} alt="Sora" class="card-img-top " />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.Dis}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Container >
    <h1 className='text-center' style={{ fontFamily: "'Stylish', sans-serif",fontSize:'3.2rem'}}>Student Stories</h1>
    <div className="text-center mt-4">
    <video className=" shadow-lg " src={video } controls style={{height:500,width:400}}></video>
        </div> 
  </Container>
    </>
  );
}

export default Card;
