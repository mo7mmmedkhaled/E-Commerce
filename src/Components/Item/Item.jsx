import React from "react";
import "./Item.css";
import { FaRegHeart, FaPlus } from "react-icons/fa";

const Item = ({ item }) => {
  const favHandeller = () => {
    console.log("mm", item.id);
  };
  const addHandeller = () => {
    console.log(item.name, item.price);
  };
  return (
    <div className="item">
      <img src={item.image} alt="" />
      <div className="item-prices">
        <h3>{item.name}</h3>
        <div className="all-price">
          <div className="item-price-new">${item.price - 10}</div>
          <div className="item-price-old">${item.price}</div>
        </div>
        <div className="item-button">
          <FaRegHeart className="fav-button" onClick={favHandeller} />
          <button onClick={addHandeller}>
            Add To Cart <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
