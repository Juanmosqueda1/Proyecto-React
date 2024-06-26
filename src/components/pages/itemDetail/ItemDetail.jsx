import { CounterContainer } from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div>
      <div className="card-detail">
        <div className="img-detail">
            <img src={item.img} alt="" />
        </div>
        <div className="texto-detail">
            <h1>{item.nombre}</h1>
            <h2>{item.descripcion}</h2>
            <h2>$ {item.precio}</h2>
            <CounterContainer stock={item.stock} onAdd={onAdd} initial={initial}/>
        </div>
      </div>
    </div>


  );
};

export default ItemDetail;
