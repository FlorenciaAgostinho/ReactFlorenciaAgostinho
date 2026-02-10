function CartItem({ id, name, quantity, price, img, removeItem }) {
  return (
    <div className="cart-item flex items-center gap-4 p-2 border-b">
      <img src={img} alt={name} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${price}</p>
      </div>
      <button
        onClick={() => removeItem(id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;
