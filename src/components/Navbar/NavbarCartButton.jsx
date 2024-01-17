import React, { useState } from 'react'
import classes from './NavbarCartButton.module.css';
import CartIcon from './CartIcon';
import Cart from './Cart';

const NavbarCartButton = () => {
  const [overlay, setoverlay] = useState(false);

  const clickHandler = () => {
    setoverlay(true);
  }

  const closeHandler = () => {
    setoverlay(false);
  }

  return (
    <div>
      {overlay && <Cart onClose={closeHandler} />}
      <button className={classes.button} onClick={clickHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className={classes.badge}>1</span>
      </button>
    </div>
  )
}

export default NavbarCartButton