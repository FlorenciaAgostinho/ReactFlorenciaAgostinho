import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "./config";

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "Items")); 
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getProductById = async (id) => {
  const productRef = doc(db, "Items", id); 
  const snapshot = await getDoc(productRef);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  } else {
    return null;
  }
};

export const getProductsByCategory = async (category) => {
  const productsCollection = collection(db, "Items");
  const q = query(productsCollection, where("category", "==", category));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

