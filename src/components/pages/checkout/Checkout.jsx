import { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import "./Checkout.css"

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
    <div className="form-container">
      {orderId ? (
        <div className="order-id-container">
          <h1>Su id es: {orderId}</h1>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            type="text"
            onChange={handleChange}
            name="nombre"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Teléfono"
            variant="outlined"
            type="text"
            onChange={handleChange}
            name="telefono"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            onChange={handleChange}
            name="email"
            fullWidth
          />
          <Button type="submit" variant="contained" className="form-button">
            Comprar
          </Button>
        </form>
      )}
    </div>
  );
};
