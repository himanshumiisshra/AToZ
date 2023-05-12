import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col className="text-center py-3">
            Created By{" "}
            <a
              href="https://www.linkedin.com/in/himanshumiisshra/"
              target="_blank"
              rel="noreferrer"
            >
              Himanshu Mishra
            </a>
          </Col>
        </Row>
        <Row className="footer-row footer-info">
          <Col className="text-center py-3">
            <a
              href="https://github.com/himanshumiisshra/AToZ"
              target="_blank"
              rel="noreferrer"
            >
              Github Repository
            </a>
          </Col>

        
        </Row>

        <Row>
          <Col className="text-center py-3">Copyright &copy; AToZ</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;