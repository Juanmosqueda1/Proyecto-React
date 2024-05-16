import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
import Swal from "sweetalert2";

export const Cart = ({ cart, clearCart, deleteById, total }) => {
  const clearCartAlert = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Esta accion no puede deshacerse!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si, vaciar",
      cancelButtonText: "cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire({
          title: "Vaciado!",
          text: "Tu carrito ha sido vaciado",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h1>Este es el carrito</h1>
      {cart.map((product) => (
        <div key={product.id} className="allCart">
          <div className="imgCart">
            <img src={product.img} alt="" />
          </div>
          <h2>{product.nombre}</h2>
          <h3>{product.quantity}</h3>
          <h2> ${product.precio}</h2>
          <Button onClick={() => deleteById(product.id)} variant="contained">
            Eliminar
          </Button>
        </div>
      ))}

      {cart.length > 0 && (
        <div>
          <h2>el total a pagar es {total}</h2>
          <Button onClick={clearCartAlert} variant="outlined">
            Limpiar carrito
          </Button>
          <Link to="/checkout">
            <Button variant="contained">finalizar compra</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
