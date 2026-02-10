import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // 👈 este es el correcto
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
      <ToastContainer /> {/* 👈 contenedor global de toasts */}
    </CartProvider>
  </StrictMode>
);
