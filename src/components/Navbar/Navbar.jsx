import React, { Fragment } from 'react'
import classes from './Navbar.module.css'
import NavbarCartButton from './NavbarCartButton';

const Navbar = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h3>MediCare</h3>
        <NavbarCartButton />
      </header>
      <div className={classes['main-image']}>
        <img style={{ objectFit: 'cover' }} src="https://cdn.sanity.io/images/0vv8moc6/pharmtech/64e01bf1f7dbd9099e249e9c3247fdbb9a46b4b1-1280x720.jpg" alt="A Delicious Food at the Right Place" />
      </div>
    </Fragment>
  );
}

export default Navbar