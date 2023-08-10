import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from 'react-bootstrap/Button';
import './Career.css'

function Career() {
  return (
    <>
      <div class="career-container">
        <div class="career-parent">
          <Container>
            <Row>
              <Col>
                <p className="h2">MARKETING EXECUTIVE</p>
                <hr />
                <p>Experience : 0 - 2 Years</p>
                <Card>
                  <Card.Body>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>JOB REQUIREMENTS</Accordion.Header>
                        <Accordion.Body>
                        <ul class="list-group text-left list-group-flush">
                    <li class="list-group-item">Good communication skills</li>
                    <li class="list-group-item">Marketing Management</li>
                    <li class="list-group-item">Time Management</li>
                    <li class="list-group-item">Advertisement and Marketing</li>
                    <li class="list-group-item">Business Development</li>
                    <li class="list-group-item">Customer Relationship</li>
                  </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <p className="h2">HOW TO APPLY</p>
                <br />
                <p className="text-left">
                  Send your CV, relevent work
                  <br />
                  experience and anything else
                  <br />
                  that will make you stand out
                  <br />
                  to <strong>infynow@gmail.com</strong>
                </p>
              </Col>
            </Row><br/>
            <div  className="button">
              <Button>APPLY</Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Career;
