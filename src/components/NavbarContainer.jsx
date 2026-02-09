import Navbar from "./Navbar";

function NavbarContainer() {
  const categories = ["beauty", "celulares", "fragancias"];

  return (
    <Navbar categories={categories} />
  );
}

export default NavbarContainer;
