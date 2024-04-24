import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ nombre, descripcion, precio, img, id }) => {
  return (
    <div className="card">
      <Card sx={{ width: 300, height: 680 }}>
        <CardMedia sx={{ height: 400 }} image={img} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $ {precio}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to = {`/itemDetail/${id}`}>
          <Button size="small">Ver más</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
