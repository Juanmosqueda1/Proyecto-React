import { Button } from "@mui/material";

const Counter = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant="outlined" onClick={restar}>Restar</Button>
        <h2 style={{ margin: '0 10px' }}>{contador}</h2>
        <Button variant="outlined" onClick={sumar}>Sumar</Button>
      </div>
      <Button 
        variant="contained" 
        onClick={() => onAdd(contador)} 
        style={{ marginTop: '20px' }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;

