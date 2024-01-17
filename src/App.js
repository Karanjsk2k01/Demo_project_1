import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shoe from './components/ShoeItem/Shoe'
import CartProvider from './components/store/cart-provider';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Shoe />
    </CartProvider>
  );
}

export default App;
