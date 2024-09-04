import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import img4 from "../image/img4.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../image/img1.jpg";

function Cards() {
  return (
    <div style={{ marginTop:"10%", display: "flex", justifyContent: "center" ,marginBottom:"5%" }}>
      <Row className="g-4">
        <Col md={4}>
          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card border="info" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <div style={{ marginBottom: "20%" }}> eee</div> <br /> */}
    </div>
  );
}
export default Cards;
