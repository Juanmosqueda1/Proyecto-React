import { Layout } from "./components/layout/Layout";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import ItemList from "./components/pages/itemListContainer/ItemList";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Layout>
        <ItemListContainer/>
      </Layout>
    </div>

  );
}

export default App;
