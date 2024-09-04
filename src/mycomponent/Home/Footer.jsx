import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="mt-5 fixed-bottom">
      <Container className="justify-content-center">
        <Navbar.Text className="text-center">
          © 2024 Your Company. All rights reserved. <br />
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Footer;
