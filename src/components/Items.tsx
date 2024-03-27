import React  from "react";
interface ItemsProps {
  name: string;
  cost: number;
  img: string[];
}

const Items: React.FC<ItemsProps> = ({ name, cost, img }) => {
  return (
    <div className="text-center">
        <div className="hover:cursor-pointer">
          <div className="relative group">
          <img src={img[0]} alt="Imagen Principal" className="main-image" />
          <img src={img[1]} alt="Imagen Secundaria" className="secondary-image opacity-0 absolute top-0 left-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
        </div>
        </div>
        <p>{name}</p>
        <p>${cost} </p>

    </div>
  )
}

export default Items