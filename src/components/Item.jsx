import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Item({ prod }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-4 bg-white rounded shadow">
      <img src={prod.thumbnail} alt={prod.title} className="w-40 h-40 object-cover mx-auto" />
      <h3 className="text-lg font-bold mt-2">{prod.title}</h3>
      <p>${prod.price}</p>

      <div className="flex gap-2 mt-2">
        <Link to={`/item/${prod.id}`} className="bg-purple-400 px-3 py-1 rounded text-white">
          Ver más
        </Link>
        <button
          onClick={() => addToCart(prod, 1)}
          className="bg-purple-500 px-3 py-1 rounded text-white"
        >
          + 🛒
        </button>
      </div>
    </div>
  );
}

export default Item;
