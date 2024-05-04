import { useState } from "react";
import { Button, TextField } from "@mui/material";

export const Checkout = () => {
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
    console.log(info);
  };

  return (
    <div>
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
        <Button type="submit" variant="contained">comprar</Button>
      </form>
    </div>
  );
};
