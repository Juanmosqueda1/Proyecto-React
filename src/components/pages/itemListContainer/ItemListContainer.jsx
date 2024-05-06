import { useEffect, useState } from "react";
import { products } from "../../ProductsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import * as React from "react";
import { Skeleton } from "@mui/material";
import "./ItemListContainer.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

export const ItemListContainer = () => {
  const { genero } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (genero) {
      consulta = query(productsCollection, where("categoria", "==", genero));
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray);
    });
  }, [genero]);

  // const addDocsProduct = () =>{

  //   let productsCollection = collection(db,"products")
  //   products.forEach((product)=>     addDoc( productsCollection, product))

  // }

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
          </div>{" "}
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
          </div>{" "}
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
          </div>{" "}
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
        </div>
      )}
                {/* <button onClick={addDocsProduct}>agregar documentos</button> */}
    </>
  );
};
