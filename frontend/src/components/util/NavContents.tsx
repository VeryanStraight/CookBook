import { Nav } from "react-bootstrap";

/**
 * NavBarContents component contains the links of the nav bars
 * @returns {JSX.Element} - the rendered links.
 */
const NavContents = () => {
  return (
    <>
      <Nav.Link href="/CookBook/">Home</Nav.Link>
      <Nav.Link href="/CookBook/addRecipe">Add Recipe</Nav.Link>
      <Nav.Link href="/CookBook/deleteRecipe">Delete Recipe</Nav.Link>
      <Nav.Link href="/CookBook/manageTags">Manage Tags</Nav.Link>
    </>
  );
};

export default NavContents;
