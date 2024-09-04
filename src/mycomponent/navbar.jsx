import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PostTable from "./PostTable";

import Usertable from "./UserTable";
import { useNavigate } from "react-router-dom";

function ColorSchemesExample() {
  const [show, setShow] = useState("post");

  let navigate = useNavigate();
  const NavClick = (table) => {
    setShow(table);
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav.Item onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Fake API
          </Nav.Item>{" "}
          &nbsp;&nbsp;&nbsp;
          <Nav className="me-auto gap-2">
            <Nav.Item
              onClick={() => navigate("/post")}
              style={{ cursor: "pointer" }}
            >
              Post
            </Nav.Item>
            {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
            <Nav.Item
              onClick={() => navigate("/users")}
              style={{ cursor: "pointer" }}
            >
              User
            </Nav.Item>
            <Nav.Item onClick={() => navigate("/photos")}
              style={{ cursor: "pointer" }}>
                Album
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
