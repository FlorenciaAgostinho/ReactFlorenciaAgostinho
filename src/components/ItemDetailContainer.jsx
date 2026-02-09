import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../firebase/db";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const item = await getProductById(id);
      setProduct(item);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="p-5 bg-purple-50 rounded shadow-md">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-64 h-64 object-cover mb-4 mx-auto"
      />
      <h2 className="text-2xl font-bold text-purple-800">{product.title}</h2>
      <p className="text-lg text-purple-600 mt-2">${product.price}</p>
      <p className="mt-2">Stock: {product.stock}</p>
    </div>
  );
}

export default ItemDetailContainer;
