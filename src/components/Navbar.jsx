import Button from "./CartWidget"

function Navbar({ categories }) {
    return (
    <header className="bg-black text-white p-3 flex justify-between">
      <h1 className="text-3xl">Fiona Store</h1>
      <details className="dropdown">
        <summary className="btn m-1">Categorias</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          {categories.map(cat => <li><a>{cat}</a></li>)}
      
        </ul>
      </details>
      <Button text="🛒 0" styles="bg-purple-400 text-black px-7 rounded" />
    </header>
  )
}

export default Navbar
