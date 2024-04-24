import { Layout } from "./components/layout/Layout";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemList from "./components/pages/itemListContainer/ItemList";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route  } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:genero" element={<ItemListContainer/>}/>
            <Route path="/itemDetail/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<CartContainer/>}/>
            <Route path="*" element={<h1>ERROR 404</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
