import { Link } from "react-router-dom";

function Item({ prod }) {
  console.log(prod);

  return (
    <div className="bg-purple-100 shadow-md rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform">

      <figure className="w-40 h-40 overflow-hidden rounded-md">
        <img
          src={prod.thumbnail}
          alt={prod.title}
          className="w-full h-full object-cover"
        />
      </figure>


      <h2 className="text-lg font-semibold mt-3 text-purple-800">
        {prod.title}
      </h2>


      <p className="text-purple-600 mt-1 font-medium">${prod.price}</p>


      <Link
        to={`/item/${prod.id}`}
        className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Ver más
      </Link>
    </div>
  );
}

export default Item;

