import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom"
import { products } from "../../ProductsMock";

const ItemDetailContainer = () => {

    const { id } =useParams()

    const [item, setItem] = useState({})

    useEffect(()=>{
        let itemEncontrado = products.find( (products)=> products.id === +id)
        const getProducts = new Promise ( (res,rej)=>{
            res(itemEncontrado)
        })

        getProducts.then((res)=> setItem(res))

    },[id])

  return  <ItemDetail item={item}/>;
};

export default ItemDetailContainer;
