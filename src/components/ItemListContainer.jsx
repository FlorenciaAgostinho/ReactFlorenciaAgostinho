import { useEffect, useState } from "react";
import Loader from "./Loader";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams(); 

  useEffect(() => {
    const productsCollection = collection(db, "Items"); 

    
    const q = categoryId
      ? query(productsCollection, where("category", "==", categoryId))
      : productsCollection;

    getDocs(q)
      .then(snapshot => {
        const items = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
        console.log("Productos cargados:", items); 
      })
      .catch(error => {
        console.error("Error al traer productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]); 
  if (loading) return <Loader />;

  return <ItemList products={products} />;
}

export default ItemListContainer;