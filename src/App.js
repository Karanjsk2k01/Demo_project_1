import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartProvider from './components/store/cart-provider';
import Medicine from './components/ShoeItem/Medicine';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Medicine />
    </CartProvider>
  );
}

export default App;
