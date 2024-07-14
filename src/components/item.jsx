import React, { useContext } from 'react';
import '../App.css';
import { ItemContext } from '../context/context';

const Item = ({ name, price }) => {
  const { foodNameArray, setFoodNameArray, foodPriceArray, setFoodPriceArray } = useContext(ItemContext);

  const handleClick = () => {
    setFoodNameArray([...foodNameArray, name]);
    setFoodPriceArray([...foodPriceArray, price]);
    console.log(foodNameArray, foodPriceArray);
  };

  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      <p className="card-price">${price}</p>
      <button className="card-button" onClick={handleClick}>Add to Cart</button>
    </div>
  );
};

export default Item;
