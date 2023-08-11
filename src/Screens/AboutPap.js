import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clip from "../Comonents/images/clipart.png";
import enrol from "../Comonents/images/enrol.png";
import training from "../Comonents/images/training.png";
import interview from "../Comonents/images/interview.png";
import work from "../Comonents/images/work.png";
import "animate.css";
import "./common.css";

function About() {
  return (
    <div className="" id="about">
      <Container className="mt-5">
        <Row className="container ">
         
          <Col className="col-md-6 mt-2">           
            <h1
               className=" about" 
              style={{
                color: "rgb(98, 96, 96)",
                fontFamily: "'Stylish', sans-serif",
                fontSize:"3.5rem"
              }}
            >
              <span style={{ color: "black" }}>
                <b>About</b>{" "}
              </span>
              Pay After Placement
            </h1>        
            <p>
              Pay after placement (PAP) is the red carpet way to land in your
              dream job. The PAP course structure is specially designed to
              assist you with learning skills relevant to industry requirements.
              This initiative is specially launched for clearing all the hurdles
              faced by the students to achieve success.
              <br />
              <br />
              Under the PAP scheme, the student need not pay the fee until the
              student gets placed. So you can attend the course and there is no
              fee involved during the training period. You will begin paying
              from the time you get your first salary after you join an
              organization paying you 3 LPA or more.
              <br />
              <br />
              Our course structure covers all the extensive requirements of
              being a developer in the corporate world. We begin from the roots
              so you need not worry about knowing programming languages. All you
              have to possess is sincere commitment towards learning and we
              assure, you would fly with bright colors.
            </p>
          </Col>
          <Col className="col-md-6 mt-2 text-center" >
            <div>
              <img src={clip} alt="" width={400} height={400} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-center mt-5 ">
        <h1 className="text-center"style={{
                
                fontFamily: "'Stylish', sans-serif",
              fontSize:"3.5rem"}}> How it Work </h1>
        <Row className="mt-4">
          <Col md={3}>
            <div>
              <img src={enrol} alt="" width={150} height={150} />
            </div>
            <div className="mt-4 text-center">
              <h4>Enrollment Process</h4>
            </div>
          </Col>
          <Col md={3}>
            <div >
              <img src={training} alt="" width={230} height={150} />
            </div>
            <div className="mt-4 text-center">
              <h4>Training Process</h4>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <img src={interview} alt="" width={250} height={150} />
            </div>
            <div className="mt-4 text-center">
              <h4>Interview Process</h4>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <img src={work} alt="" width={145} height={150} />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-center">Ready to Work</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
