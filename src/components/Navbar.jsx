import Button from "./CartWidget"

function Navbar() {
  return (
    <header className="bg-black text-white p-3 flex justify-between">
      <h1 className="text-3xl">Fiona Store</h1>
      <ul className="flex gap-6 items-center">
        <li>Vajilla</li>
        <li>Accesorios de Mesa</li>
        <li>Decoracion</li>
        <li>Cocina</li>
        <li>Merchandising</li>
      </ul>
      <Button text="🛒 0" styles="bg-purple-400 text-black px-7 rounded" />
    </header>
  )
}

export default Navbar
