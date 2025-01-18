import { Navbar, Nav, Container } from "react-bootstrap";

/**
 * NavBarSmall component is the nav bar for small screen sizes.
 * @returns {JSX.Element} - the rendered small nav bar.
 */
const NavBarSmall = () => {
  return (
    <Navbar bg="light" data-bs-theme="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto offset-md-1">
            <Nav.Link href="/CookBook/">Home</Nav.Link>
            <Nav.Link href="/CookBook/addRecipe">Add Recipe</Nav.Link>
            <Nav.Link href="/CookBook/deleteRecipe">Delete Recipe</Nav.Link>
            <Nav.Link href="/CookBook/manageTags">Manage Tags</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarSmall;
