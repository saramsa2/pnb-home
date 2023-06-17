
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = ({children}) => {
  const currentPass = window.location.pathname;
  
  return (
    <div>
      <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
        <Container fluid style={{ width:"90%"}}>
          <Navbar.Brand href="/"><b>Princess Natural Bedding</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              justify
              variant="pills"
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px", width:"100%" }}
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