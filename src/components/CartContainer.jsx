import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";

function CartContainer() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [client, setClient] = useState({
    name: "Cliente Demo",
    email: "demo@email.com",
    phone: "123456789",
    address: "Calle Falsa 123",
  });
  const [orderId, setOrderId] = useState(null);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!client.name || !client.email || !client.phone || !client.address) {
      toast.error("Por favor completa todos los datos del cliente");
      return;
    }

    const order = {
      buyer: client,
      items: cart,
      date: new Date(),
      total,
    };

    try {
      const docRef = await addDoc(collection(db, "Orders"), order);
      setOrderId(docRef.id);
      toast.success(`Compra realizada con exito ID: ${docRef.id}`);
      clearCart();
    } catch (error) {
      toast.error("Error al generar la orden");
      console.error(error);
    }
  };

  if (cart.length === 0 && !orderId) {
  return (
    <div className="card bg-base-100 shadow-md p-5 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-500 mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.9M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>
      <p className="text-purple-700 font-semibold">Tu carrito está vacío 😢</p>
    </div>
  );
}

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Carrito</h2>
      {cart.map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.title}
          quantity={item.quantity}
          price={item.price}
          img={item.thumbnail}
          removeItem={removeFromCart}
        />
      ))}

      <h3 className="text-xl font-semibold mt-6 text-purple-700">
        Total: ${total}
      </h3>

      <h3 className="text-xl font-semibold mt-6">Datos del cliente</h3>
      <input
        type="text"
        placeholder="Nombre"
        className="border p-2 w-full mt-2"
        value={client.name}
        required
        onChange={e => setClient({ ...client, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mt-2"
        value={client.email}
        required
        onChange={e => setClient({ ...client, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Teléfono"
        className="border p-2 w-full mt-2"
        value={client.phone}
        required
        onChange={e => setClient({ ...client, phone: e.target.value })}
      />
      <input
        type="text"
        placeholder="Dirección"
        className="border p-2 w-full mt-2"
        value={client.address}
        required
        onChange={e => setClient({ ...client, address: e.target.value })}
      />

      <button
        onClick={handleCheckout}
        className="bg-purple-500 text-white px-4 py-2 rounded mt-4"
      >
        Finalizar compra
      </button>

      {orderId && (
        <p className="mt-4 text-green-600">
          Gracias por tu compra! Su numero de ID es: {orderId}
        </p>
      )}
    </div>
  );
}

export default CartContainer;
