import classes from './Form.module.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
  const [medicineName, setmedicineName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setquantity] = useState('');

  const resetForm = () => {
    setmedicineName('');
    setDescription('');
    setPrice('');
    setquantity('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newId = `S${uuidv4()}`;
    const formData = {
      id: newId,
      medicineName,
      description,
      price: parseInt(price),
      quantity: quantity,
    };

    props.onpassed([formData])

    resetForm();
  };

  return (
    <section className={classes.summary}>
      <h2>Enter the Info</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.wrapper}>
          <label>Medicine Name:</label>
          <input type="text" required value={medicineName} onChange={(e) => setmedicineName(e.target.value)} />

          <label>Description:</label>
          <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)} />

          <label>Price:</label>
          <input type="number" required value={price} onChange={(e) => setPrice(e.target.value)} />

          <label>Quantity:</label>
          <input type="number" required value={quantity} onChange={(e) => setquantity(e.target.value)} />

          <button type="submit" className={classes.button}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
