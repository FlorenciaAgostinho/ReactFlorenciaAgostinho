import { useState, useEffect } from "react"
import Navbar from "./Navbar"

function NavbarContainer() {
const [categories, setCategories] = useState([])
   useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
    return (
        <Navbar categories={categories} />
    )
}
 export default NavbarContainer