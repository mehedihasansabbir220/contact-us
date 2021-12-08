import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';



const Example = (props) => {

  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
        <img
          alt=""
          src='#'
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Menu</Nav.Link>
      <NavDropdown title="Benquet Facility" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.3">Banquest Rules</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Recommended Vendor  </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </>
  );
}

export default Example;