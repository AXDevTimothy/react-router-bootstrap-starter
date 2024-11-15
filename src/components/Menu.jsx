import { Link } from "react-router-dom";
import { Nav, Container, Navbar , Button, Form, Row, Col} from "react-bootstrap";


function connectWalletPressed() {
  console.log("Button Pressed");
}

function walletButtonText() {
  return "0x123...35450";
}

const Menu = () => {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="#home">BillyBoard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Read the Docs</Nav.Link>
            <Nav.Link href="#pricing">Build with Billy</Nav.Link>   

          </Nav>
          <Form inline>
            <Row>
              <Col className="px-5">
                <Form.Control
                  type="text"
                  placeholder="Board ID"
                  className=" mr-2"
                  
                />
              </Col>
            </Row>
          </Form>
          <Button variant="primary"onClick={connectWalletPressed}>{walletButtonText()}</Button>

        </Container>
      </Navbar>
  );
};

export default Menu;
