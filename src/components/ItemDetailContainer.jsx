import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById, getProductsByCategory } from "../firebase/db";


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
        <div className="p-5 bg-purple-50 rounded shadow-md">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="w-64 h-64 object-cover mb-4 mx-auto"
            />
            <h2 className="text-2xl font-bold text-purple-800">{product.title}</h2>
            <p className="text-lg text-purple-600 mt-2">${product.price}</p>
            <p className="mt-2">Stock: {product.stock}</p>


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
