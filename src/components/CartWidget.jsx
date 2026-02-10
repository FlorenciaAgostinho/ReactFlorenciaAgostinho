import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget({ styles }) {
  const { getTotalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className={styles}>
      🛒 {getTotalItems()}
    </Link>
  );
}

export default CartWidget;