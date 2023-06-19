
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = ({children}) => {
  const currentPass = window.location.pathname;
  const pnb_logo = require('../resources/images/pnb_logo.png');
  
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="light">
        <Container fluid style={{ width: "90%" }}>
          <Navbar.Brand href="/">
            <img src={pnb_logo} style={{ height: "40px" }}></img>
            <b>Princess Natural Bedding</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Nav
              justify
              variant="pills"
              className="me-auto my-2 my-lg-0 navbar-nav-scroll "
              navbarScroll
              activeKey={currentPass}
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sheep">Sheep</Nav.Link>
              <Nav.Link href="/alpaca">Alpaca</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>{children}</div>
    </div>
  );
};

export default Navigation;