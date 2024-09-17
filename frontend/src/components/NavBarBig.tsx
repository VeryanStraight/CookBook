import { Nav } from "react-bootstrap";

const NavBarBig = () => {
  return (
    <div className="d-none d-md-block" style={{ width: "200px" }}>
      <Nav className="flex-column p-3">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/recipe">Recipe</Nav.Link>
      </Nav>
    </div>
  );
};

export default NavBarBig;
