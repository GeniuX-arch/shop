import React  from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

interface ItemsProps {
 id: number;
}

const Items: React.FC<ItemsProps> = ({ id }) => {
  const product=products[id];
  return (
    <div className="text-center">
        <Link to={`/product/${id}`}>
          <div className="hover:cursor-pointer">
            <div className="relative group">
            <img src={product.img[0]} alt="Imagen Principal" className="main-image" />
            <img src={product.img[1]} alt="Imagen Secundaria" className="secondary-image opacity-0 absolute top-0 left-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          </div>
          </div>
          <p>{product.name}</p>
          <p>${product.cost} </p>
        </Link>

    </div>
  )
}

export default Items