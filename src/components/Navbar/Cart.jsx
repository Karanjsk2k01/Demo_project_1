import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../UI/Modal'
import { useContext } from 'react';
import CartContext from '../store/cart-context';

const Cart = (props) => {

  const cartContext = useContext(CartContext);


  // const dummyData = [
  //   {
  //     id: 'm1',
  //     name: 'Adidas',
  //     description: 'Finest fish and veggies',
  //     price: 22.99,
  //   },

  // ];

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </ul>
  );


  return (
    <>
      <Modal>
        {cartItems}
        <div className={classes.total}>
          <span className={classes.subtotal}>Total</span>
          <span className={classes.subtotal}> ${cartContext.totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button} >Order</button>
        </div>
      </Modal>

    </>
  );
};

export default Cart;
