import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function Navbar({ categories }) {
  return (
    <header className="bg-black text-white p-3 flex flex-wrap justify-between items-center gap-2">
     
      <Link
        to="/"
        className="text-2xl sm:text-3xl font-bold hover:text-purple-300"
      >
        Fiona Store
      </Link>

      <details className="dropdown">
        <summary className="bg-purple-400 text-black px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base rounded font-semibold cursor-pointer list-none">
          Categorías
        </summary>
        <ul className="menu dropdown-content bg-white text-black rounded-box z-10 w-52 p-2 shadow-lg">
          {categories.map((cat, index) => (
            <li key={index}>
              <Link
                to={`/category/${cat}`}
                onClick={(e) => {
                  e.target.closest("details").removeAttribute("open");
                }}
                className="hover:text-purple-500"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </details>

      <CartWidget
        styles="
          bg-purple-400 text-black rounded font-semibold
          px-4 py-2 text-sm
          sm:px-6 sm:py-2 sm:text-base
        "
      />
    </header>
  );
}

export default Navbar;