import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarContainer from "./components/NavbarContainer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer"; 
function App() {
  return (
    <BrowserRouter>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;