import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function ItemDetail({ product }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  const handleQuickAdd = () => {
    addToCart(product, 1);
  };

  return (
    <div className="p-5 bg-white rounded shadow">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-64 h-64 object-cover mb-4 mx-auto"
      />
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="text-lg mt-2">${product.price}</p>
      <p className="mt-2">Stock: {product.stock}</p>

      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          className="bg-purple-300 px-3 py-1 rounded"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => setQuantity(q => q + 1)}
          className="bg-purple-300 px-3 py-1 rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAdd}
        className="bg-purple-500 text-white px-4 py-2 rounded mt-4"
      >
        Agregar {quantity} al carrito
      </button>

      
      <button
        onClick={handleQuickAdd}
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
      >
        Agregar 1 rápido 🛒
      </button>
    </div>
  );
}

export default ItemDetail;
