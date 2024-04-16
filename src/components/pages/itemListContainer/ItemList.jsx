import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <Grid container>
        {items.map(({id, nombre, descripcion, precio, img}) => {
          return <Grid key={id} item>
          <ProductCard nombre={nombre} img={img} descripcion={descripcion} precio={precio}/>
          </Grid>
        })}
    </Grid>
  );
};

export default ItemList;
