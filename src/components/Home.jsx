import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="text-center section">
        <h3>
          Bienvenido a <strong>Happy Cake</strong>
        </h3>
        <p>El lugar de los pasteles felices</p>
        <img
          className="cake"
          src="https://pngimg.com/uploads/cake/cake_PNG13093.png"
          alt=""
        />
      </Container>
    </>
  );
};

export default Home;
