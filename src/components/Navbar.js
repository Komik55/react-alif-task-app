import { Navbar, Image, Container, Button } from "react-bootstrap";
import { useState } from "react";
import Filter from "./Filter";
const NavbarBlock = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Post App</Navbar.Brand>
          <Button variant="primary" onClick={() => setShow(true)}>
            Фильтр
          </Button>{" "}
          <Image src="/favicon.ico" roundedCircle></Image>
        </Container>
      </Navbar>
      <Filter show={show} handleClose={handleClose} toggleShow={toggleShow} />
    </>
  );
};

export default NavbarBlock;
