import { Link } from "react-router-dom";
import Button from "./CartWidget";

function Navbar({ categories }) {
  return (
    <header className="bg-black text-white p-3 flex justify-between items-center">
      {/* Título con Link al home */}
      <Link to="/" className="text-3xl font-bold hover:text-purple-300">
        Fiona Store
      </Link>

      {/* Dropdown de categorías */}
      <details className="dropdown">
        <summary className="btn m-1">Categorías</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          {categories.map((cat, index) => (
            <li key={index}>
              <a>{cat}</a>
            </li>
          ))}
        </ul>
      </details>

      {/* Botón del carrito */}
      <Button text="🛒 0" styles="bg-purple-400 text-black px-7 rounded" />
    </header>
  );
}

export default Navbar;

