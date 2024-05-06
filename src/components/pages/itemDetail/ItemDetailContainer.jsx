import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../ProductsMock";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const { addToCart, getQuantityById } = useContext(CartContext);

  let initial = getQuantityById(+id);

  useEffect(() => {

    let productsCollection = collection( db , "products" )
    let refDoc = doc(productsCollection, id)
    getDoc(refDoc).then( res => {
        setItem({id:res.id, ...res.data()})
    })

  }, [id]);

  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad };
    addToCart(product);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Agregado correctamente!",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetailContainer;
