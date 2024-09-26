import { Nav } from "react-bootstrap";
import NavContents from "./NavContents";

const NavBarBig = () => {
  return (
    <div
      className="d-none d-md-block"
      style={{ width: "200px", height: "100%" }}
    >
      <Nav
        className="flex-column p-3 bg-body-tertiary"
        style={{ height: "100%" }}
      >
        <NavContents />
      </Nav>
    </div>
  );
};

export default NavBarBig;
