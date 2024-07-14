import { useContext } from 'react';
import '../App.css';
import { ItemContext } from '../context/context';

function Cart() {
  const { foodNameArray,foodPriceArray } = useContext(ItemContext);

  return (
    <div>
      <ul style={{ display: 'flex' }}>
        <li>Name:</li>
        {foodNameArray.map((val, idx) => (
          <li key={idx}>
            {val}
          </li>
        ))}
        <li>Price:</li>
        {foodPriceArray.map((val,key)=>(
            <li>{val}</li>
        ))

        }
      </ul>
      
     
    </div>
  );
}

export default Cart;
