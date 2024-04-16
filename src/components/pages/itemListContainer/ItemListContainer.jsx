import { useEffect, useState } from "react";
import { products } from "../../ProductsMock";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(products);
      } else {
        reject("ha ocurrido un error");
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => [console.log(error)]);
  }, []);

  return <ItemList items={items} />;
};
