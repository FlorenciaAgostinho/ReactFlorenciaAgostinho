import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";

function CartContainer() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [client, setClient] = useState({ name: "", email: "", phone: "" });

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (!client.name || !client.email || !client.phone) {
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
      toast.success(`Compra realizada con ID: ${docRef.id}`);
      clearCart();
    } catch (error) {
      toast.error("Error al generar la orden");
      console.error(error);
    }
  };

  if (cart.length === 0) {
    return <p className="p-5 text-purple-700">El carrito está vacío</p>;
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

      {/* Mostrar el total */}
      <h3 className="text-xl font-semibold mt-6 text-purple-700">
        Total: ${total}
      </h3>

      <h3 className="text-xl font-semibold mt-6">Datos del cliente</h3>
      <input
        type="text"
        placeholder="Nombre"
        className="border p-2 w-full mt-2"
        onChange={e => setClient({ ...client, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mt-2"
        onChange={e => setClient({ ...client, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Teléfono"
        className="border p-2 w-full mt-2"
        onChange={e => setClient({ ...client, phone: e.target.value })}
      />

      <button
        onClick={handleCheckout}
        className="bg-purple-500 text-white px-4 py-2 rounded mt-4"
      >
        Finalizar compra
      </button>
    </div>
  );
}

export default CartContainer;
