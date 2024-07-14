import logo from './logo.svg';
import './App.css';
import Item from './components/item';
import Cart from './components/cart';

function App() {
  return (
    <div>
    <div className="App">
      <Item name='Paneer' price='100' />
      <Item name='Mutton' price='200' />
      <Item name='Chicken' price='300' />
    </div>
    <Cart/>
    </div>
  );
}

export default App;
