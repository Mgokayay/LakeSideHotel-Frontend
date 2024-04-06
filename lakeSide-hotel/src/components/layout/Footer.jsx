import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/Container";

const Footer = () => {
  let today = new Date();
  return (
    <footer className="by-dark text-light py-3 footer mt-lg-5">
      <Container>
        <Row>
          <Col xs={12} md={12} className="text-center">
            <p>&copy; {today.getFullYear()} lakeSide Hotel</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
