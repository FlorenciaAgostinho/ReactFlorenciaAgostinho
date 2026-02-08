function Item({ prod }) {
  return (
    <div className="bg-purple-100 shadow-md rounded-lg p-4 flex flex-col items-center hover:scale-105 transition-transform">
      <figure className="w-full h-48 overflow-hidden rounded-md">
        <img
          src={prod.thumbnail}
          alt={prod.title}
          className="w-full h-full object-cover"
        />
      </figure>
      <h2 className="text-lg font-semibold mt-3 text-purple-800">{prod.title}</h2>
      <p className="text-purple-600 mt-1 font-medium">${prod.price}</p>
      <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
        Ver más
      </button>
    </div>
  )
}

export default Item

