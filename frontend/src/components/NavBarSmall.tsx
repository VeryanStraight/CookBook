import { Navbar, Nav } from "react-bootstrap";

const NavBarSmall = () => {
  return (
    <Navbar bg="light" expand="lg" className="d-md-none">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Recipe">Recipe</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarSmall;
