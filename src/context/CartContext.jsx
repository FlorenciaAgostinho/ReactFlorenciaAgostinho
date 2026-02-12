import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
  setCart(prev => {
    const existing = prev.find(p => p.id === product.id);
    if (existing) {
      toast.success(`Se agregaron ${quantity} más de ${product.title} 🛒`, {
        position: "top-right",
        autoClose: 2000,
        toastId: product.id, // evita duplicados
      });
      return prev.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
      );
    }
    toast.success(`${product.title} agregado al carrito 🛒`, {
      position: "top-right",
      autoClose: 2000,
      toastId: product.id,
    });
    return [...prev, { ...product, quantity }];
  });
};


  const removeFromCart = id => setCart(prev => prev.filter(p => p.id !== id));
  const clearCart = () => setCart([]);

  const getTotalItems = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};