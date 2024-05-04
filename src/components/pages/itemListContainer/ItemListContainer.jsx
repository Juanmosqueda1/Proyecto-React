import { useEffect, useState } from "react";
import { products } from "../../ProductsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import * as React from "react";
import { Skeleton } from "@mui/material";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const { genero } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let productosFiltrados = products.filter(
      (products) => products.categoria === genero
    );

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        setTimeout(() => {
          resolve(genero ? productosFiltrados : products);
        }, 1000);
      } else {
        reject("ha ocurrido un error");
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => [console.log(error)]);
  }, [genero]);

  return (
    <>
      {items.length > 0 ? (
        <ItemList items={items} error={error} />
      ) : (
        <div className="skeleton">
          <div>
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={330}
              height={400}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="text"
              width={330}
              height={40}
            />
          </div>
          <div>
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={330}
              height={400}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="text"
              width={330}
              height={40}
            />
          </div>          <div>
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={330}
              height={400}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="text"
              width={330}
              height={40}
            />
          </div>          <div>
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={330}
              height={400}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="text"
              width={330}
              height={40}
            />
          </div>          <div>
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={330}
              height={400}
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="text"
              width={330}
              height={40}
            />
          </div>
        </div>
      )}
    </>
  );
};
