import React from "react";
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
        </div>
        <p>{name}</p>
        <p>${cost} pesos</p>

    </div>
  )
}

export default Items