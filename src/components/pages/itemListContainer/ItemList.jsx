
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ items }) => {
  return (
    <div className="tarjetas">
      {items.map(({ id, nombre, descripcion, precio, img }) => {
        return (
          <ProductCard
            key={id}
            nombre={nombre}
            img={img}
            descripcion={descripcion}
            precio={precio}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
