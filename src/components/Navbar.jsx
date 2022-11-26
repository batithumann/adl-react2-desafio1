import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <Link className="brand" to="/">
            Home
          </Link>
          <Nav className="me-auto">
            <Link to="/contacto" className="ms-3">
              Contacto
            </Link>
            <Link to="/ayuda" className="ms-3">
              Ayuda
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
