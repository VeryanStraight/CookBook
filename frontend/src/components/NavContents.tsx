import React from "react";
import { Nav } from "react-bootstrap";

const NavContents = () => {
  return (
    <>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/addRecipe">addRecipe</Nav.Link>
    </>
  );
};

export default NavContents;
