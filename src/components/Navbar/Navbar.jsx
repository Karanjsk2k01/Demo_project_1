import React, { Fragment } from 'react'
import classes from './Navbar.module.css'
import NavbarCartButton from './NavbarCartButton';

const Navbar = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h3>FootWears</h3>
        <NavbarCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww" alt="A Delicious Food at the Right Place" />
      </div>
    </Fragment>
  );
}

export default Navbar