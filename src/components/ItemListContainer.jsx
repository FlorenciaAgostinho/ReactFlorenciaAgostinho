import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsCollection = collection(db, "Items");
        const q = categoryId
          ? query(productsCollection, where("category", "==", categoryId))
          : productsCollection;

        const snapshot = await getDocs(q);
        const products = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        console.log("Productos cargados:", products);
        setItems(products);
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    fetchData();
  }, [categoryId]);

  return items.length > 0 ? (
    <ItemList items={items} />
  ) : (
    <p className="p-5 text-purple-700">No hay productos en esta categoría</p>
  );
}

export default ItemListContainer;

