import CartContextProvider from "./context/CartContext";
import { Layout } from "./components/layout/Layout";
import CartContainer from "./components/pages/cart/CartContainer";
import { Checkout } from "./components/pages/checkout/Checkout";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/categoria/:genero"
                element={<ItemListContainer />}
              />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>ERROR 404</h1>} />
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
