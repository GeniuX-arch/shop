import React from "react";
import { img as hola } from "../assets/imgs";
interface ItemsProps {
  name: string;
  cost: number;
  img: string[];
}

const Items: React.FC<ItemsProps> = ({ name, cost, img }) => {
  return (
    <div>
        <div>
            <img src={img[0]} alt="" />
            <p>{typeof img[0]}</p>
        </div>
        <p>{name}</p>
        <p>${cost} pesos</p>

    </div>
  )
}

export default Items