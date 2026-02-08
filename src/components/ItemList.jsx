import Item from "./Item"

function ItemList({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 bg-purple-50">
      {items.map(prod => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  )
}

export default ItemList
