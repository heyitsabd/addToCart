import { createContext, useState } from "react";

export const ItemContext = createContext();

export const ContextProvider = (props) => {
  const [foodNameArray, setFoodNameArray] = useState([]);
  const [foodPriceArray, setFoodPriceArray] = useState([]);

  return (
    <ItemContext.Provider value={{ foodNameArray, setFoodNameArray, foodPriceArray, setFoodPriceArray }}>
      {props.children}
    </ItemContext.Provider>
  );
};
