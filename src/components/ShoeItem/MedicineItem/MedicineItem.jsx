import React, { useContext, useState } from 'react';
import classes from './MedicineItem.module.css';
import CartContext from '../../store/cart-context';

const MedicineItem = (props) => {

  const cartContext = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const price = `$${props.price.toFixed(2)}`;

  const selectQuantityHandler = () => {
    setSelectedQuantity(prevQuantity => {
      const newQuantity = isSelected ? Math.max(prevQuantity - 1, 0) : prevQuantity + 1;
      setIsSelected(!isSelected);  // Toggle isSelected
      return newQuantity;
    });
  };


  const addToCartHandler = () => {
    if (selectedQuantity === 0) {
      return;
    }

    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1,
    };

    cartContext.addItem(item);

    setIsSelected(false)
  };

  const sizes = () => {
    const remainingQuantity = Math.max(props.quantity - selectedQuantity, 0);

    return (
      <div
        className={`${classes.size} ${isSelected ? classes.selected : ''}`}
        onClick={remainingQuantity ? selectQuantityHandler : null}
      >
        <span>{remainingQuantity}</span>
      </div>
    );
  };

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
        <h4>Available Quantity</h4>
        {sizes()}
      </div>
      <div className={classes.amount}>
        <div className={classes.button}>
          <button onClick={addToCartHandler}>+ Add</button>
        </div>
      </div>
    </li>
  );
};

export default MedicineItem;
