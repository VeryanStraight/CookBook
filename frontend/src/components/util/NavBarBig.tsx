import { Nav } from "react-bootstrap";
import NavContents from "./NavContents";

/**
 * NavBarBig component is the nav bar for large screen sizes.
 * @returns {JSX.Element} - the rendered big nav bar.
 */
const NavBarBig = () => {
  return (
    <div className="d-none d-md-block">
      <Nav
        className="flex-column p-3 bg-body-tertiary"
        style={{ width: "200px", minHeight: "100vh" }}
      >
        <NavContents />
      </Nav>
    </div>
  );
};

export default NavBarBig;
