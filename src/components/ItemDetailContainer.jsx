import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getProductsByCategory } from "../firebase/db";
import ItemDetail from "./ItemDetail"; 

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const item = await getProductById(id);
      setProduct(item);

      if (item?.category) {
        const others = await getProductsByCategory(item.category);
        setRelated(others.filter(p => p.id !== item.id));
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <ItemDetail product={product} /> 
      {related.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-purple-700 mb-3">
            Más en {product.category}
          </h3>
          <ul className="grid grid-cols-2 gap-4">
            {related.map(r => (
              <li key={r.id} className="bg-white p-3 rounded shadow">
                <img
                  src={r.thumbnail}
                  alt={r.title}
                  className="w-32 h-32 object-cover mx-auto"
                />
                <p className="text-center mt-2">{r.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
