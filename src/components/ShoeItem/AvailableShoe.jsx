import React from 'react';
import classes from './AvailableShoe.module.css';
import ShoeItem from './ShoeItem/ShoeItem';
import Card from '../UI/card'; // Import the Card component

const DUMMY_SHOES = [
  {
    id: 's1',
    shoeName: 'Running Shoes',
    description: 'Best for jogging and running',
    price: 59.99,
    sizes: {
      L: 10,
      M: 8,
      XL: 12,
    },
  },
  {
    id: 's2',
    shoeName: 'Casual Sneakers',
    description: 'Stylish and comfortable',
    price: 39.99,
    sizes: {
      L: 9,
      M: 7,
      XL: 11,
    },
  },
  {
    id: 's3',
    shoeName: 'Hiking Boots',
    description: 'Durable for outdoor adventures',
    price: 79.99,
    sizes: {
      L: 11,
      M: 9,
      XL: 13,
    },
  },
  {
    id: 's4',
    shoeName: 'Slip-on Sandals',
    description: 'Perfect for a casual day out',
    price: 29.99,
    sizes: {
      L: 8,
      M: 6,
      XL: 10,
    },
  },
];


const AvailableShoe = () => {
  const ShoeList = DUMMY_SHOES.map((shoe) => (
    <ShoeItem
      key={shoe.id}
      id={shoe.id}
      name={shoe.shoeName}
      description={shoe.description}
      price={shoe.price}
      sizes={shoe.sizes}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{ShoeList}</ul>
      </Card>
    </section>
  );
}

export default AvailableShoe;
