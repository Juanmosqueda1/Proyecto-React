import { useEffect, useState } from "react";
import { products } from "../../ProductsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

  const {genero} = useParams()
  console.log(genero)

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {

    let productosFiltrados = products.filter(products => products.categoria === genero)

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve( genero ? productosFiltrados : products );
      } else {
        reject("ha ocurrido un error");
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => [console.log(error)]);
  }, [genero]);

  return <ItemList items={items} />;
};
