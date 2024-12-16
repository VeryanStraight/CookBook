import { Navbar, Nav } from "react-bootstrap";
import NavContents from "./NavContents";

/**
 * NavBarSmall component is the nav bar for small screen sizes.
 * @returns {JSX.Element} - the rendered small nav bar.
 */
const NavBarSmall = () => {
  return (
    <Navbar bg="body-tertiary" expand="lg" className="d-md-none">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavContents />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarSmall;
