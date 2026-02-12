import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function Navbar({ categories }) {
  return (
    <header className="bg-black text-white p-3 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold hover:text-purple-300">
        Fiona Store
      </Link>
      <details className="dropdown">
       <summary className="btn m-1 text-lg font-bold list-none">Categorías</summary>
        <ul className="menu dropdown-content bg-white text-black rounded-box z-10 w-52 p-2 shadow-lg">
          {categories.map((cat, index) => (
            <li key={index}>
              <Link
                to={`/category/${cat}`}
                className="hover:text-purple-500"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </details>
     <CartWidget styles="bg-purple-400 text-black px-10 py-3 rounded-lg text-xl" />

    </header>
  );
}

export default Navbar;