import { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const [info, setInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });
  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      buyer: info,
      item: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, obj).then((res) => setOrderId(res.id));

    cart.forEach((product) => {
      let productsCollection = collection(db, "products");
      let refDoc = doc(productsCollection, product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });

    clearCart()
  };

  return (
    <div>
      {orderId ? (
        <h1>su id es: {orderId}</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="nombre"
            variant="outlined"
            type="text"
            onChange={handleChange}
            name="nombre"
          />
          <TextField
            id="outlined-basic"
            label="telefono"
            variant="outlined"
            type="text"
            onChange={handleChange}
            name="telefono"
          />
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            type="text"
            onChange={handleChange}
            name="email"
          />
          <Button type="submit" variant="contained">
            comprar
          </Button>
        </form>
      )}
    </div>
  );
};
