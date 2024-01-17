import React, { useState, useContext } from 'react';
import classes from './ShoeItem.module.css';
import CartContext from '../../store/cart-context';

const ShoeItem = (props) => {

  const cartContext = useContext(CartContext)
  const [amount, setAmount] = useState(1);
  const [selectedSize, setSelectedSize] = useState(''); // State to track the selected size

  const price = `$${props.price.toFixed(2)}`;

  const selectSizeHandler = (size) => {
    if (selectedSize === size) {
      setSelectedSize('');
    } else {
      setSelectedSize(size);
    }
  };

  const addToCartHandler = () => {
    if (!selectedSize) {
      return;
    }

    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +amount,
      size: selectedSize,
    };

    cartContext.addItem(item)

    setSelectedSize('');
  };

  const sizes = Object.keys(props.sizes).map((size) => (
    <div
      key={size}
      className={`${classes.size} ${selectedSize === size ? classes.selected : ''}`}
      onClick={() => selectSizeHandler(size)}
    >
      <span>{size}</span>
      <span>-{props.sizes[size]}</span>
    </div>
  ));


  return (
    <li className={classes.meal}>
      <div className={classes.wrapper}>
        <div className={classes.wrappersection}>
          <h3 className={classes.name}>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div className={classes.sizesection}>
        <h4>Select Size</h4>
        {sizes}
      </div>

      <div className={classes.amount}>
        <div className={classes.button}>
          <button onClick={addToCartHandler}>+ Add</button>
        </div>
      </div>
    </li>
  );
};

export default ShoeItem;
