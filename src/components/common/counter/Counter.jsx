import { Button, TextField } from "@mui/material";

const Counter = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div>
      <Button variant="outlined" onClick={restar}>restar</Button>
      <h2>{contador}</h2>
      <Button variant="outlined" onClick={sumar}>sumar</Button>
      <Button variant="contained" onClick={() => onAdd(contador)}>agregar al carrito</Button>
    </div>
  );
};

export default Counter;
