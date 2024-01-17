
import classes from './CartItem.module.css';


const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <div className={classes.amount}>
            <span>L </span>
            <spam>-1</spam>
          </div>
          <div className={classes.amount}>
            <span>XL </span>
            <spam>-1</spam>
          </div>
          <div className={classes.amount}>
            <span>SM </span>
            <spam>-1</spam>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;