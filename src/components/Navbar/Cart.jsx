import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../UI/Modal'

const Cart = (props) => {

  const dummyData = [
    {
      id: 'm1',
      name: 'Adidas',
      description: 'Finest fish and veggies',
      price: 22.99,
    },

  ];

  const cartItems = (
    <ul className={classes['cart-items']}>
      {dummyData.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
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
          <span className={classes.subtotal}> $0</span>
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
