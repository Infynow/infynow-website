import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./common.css";
import pap2 from "../Comonents/images/pap2.png";
import men from "../Comonents/images/BusinessMen.png";
import Typed from "react-typed";
import { Button } from "react-bootstrap";
import "animate.css";

function Home() {
  return (
    <>
      <div className="main">
        <Container>
          <Row className="container ">
            <Col className=" text-center mt-5 col-md-6">
              <img src={pap2} alt="" width={380} />
              <h1 className="typed " style={{ color: "rgb(98, 96, 96)" }}>
                Pay After Placement
              </h1>
              <h2
                className="mt-5 animate__animated animate__bounce animate__zoomIn "
                style={{ color: "rgb(98, 96, 96)" }}
              >
                Courses We Offer
              </h2>
              {/* <hr style={{}} /> */}
              <h1 className="typed mt-3 ">
                <Typed
                  strings={[
                    "FullStack Development",
                    "Machine Learning",
                    "Artificial Intelligence",
                    "Python",
                    "React JS",
                  ]}
                  typeSpeed={60}
                  backSpeed={60}
                  loop
                />
              </h1>
              <h5 className="mt-4">
                Applications for Pay After Placement Course - is OPEN!
              </h5>
              <a href="#about">
              <Button
                className="mt-3"
                style={{
                  width: "150px",
                  borderRadius: "18px",
                  color: "white",
                  background: "rgb(207, 133, 6)",
                  border: "none",
                }}
              >
                Enroll Now
              </Button>
              </a>

              {/* <h1 className="pap-h1" >PAP</h1> */}
              {/* <hr className="" style={{width:'65%',border:'0',height:"5px",backgroundColor:'rgb(10, 10, 10)'}}/> */}
            </Col>
            <Col className="col-md-6 text-center" style={{ overflow: "hidden" }}>
              <img
                className="mt-3"
                src={men}
                alt=""
                width={750}
                height={600}
                style={{}}
              />
            </Col>
          </Row>
        </Container>
        
      </div>
    </>
  );
}

export default Home;
