import { Nav } from "react-bootstrap";

const NavContents = () => {
  return (
    <>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/addRecipe">Add Recipe</Nav.Link>
      <Nav.Link href="/deleteRecipe">Delete Recipe</Nav.Link>
      <Nav.Link href="/manageTags">Manage Tags</Nav.Link>
    </>
  );
};

export default NavContents;
