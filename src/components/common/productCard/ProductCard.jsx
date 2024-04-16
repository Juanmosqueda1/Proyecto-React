import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ nombre, descripcion, precio, img }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 500 }}
        image={img}
        title="green iguana"
      />
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
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
