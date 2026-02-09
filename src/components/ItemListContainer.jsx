import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../firebase/db";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setItems(products);
    };
    fetchData();
  }, []);

  return <ItemList items={items} />;
}

export default ItemListContainer;
