import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contacto = () => {
  return (
    <>
      <Container className="text-center section">
        <h3>Cuéntanos, ¿en qué podemos ayudarte?</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label class>Correo:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tus comentarios:</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary">Enviar</Button>
        </Form>
      </Container>
    </>
  );
};

export default Contacto;
