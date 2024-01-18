import React from 'react';
import classes from './AvailableMedicine.module.css';
import MedicineItem from './MedicineItem/MedicineItem';
import Card from '../UI/card';
import Form from '../Form/Form';

const DUMMY_MEDICINES = [
  {
    id: 'm1',
    medicineName: 'Pain Reliever',
    description: 'Relieves mild to moderate pain',
    price: 9.99,
    quantity: 30,
  },
  // {
  //   id: 'm2',
  //   medicineName: 'Cold and Flu Tablets',
  //   description: 'Relieves symptoms of cold and flu',
  //   price: 14.99,
  //   quantity: 20,
  // },
  // {
  //   id: 'm3',
  //   medicineName: 'Allergy Relief',
  //   description: 'For relief from allergies and hay fever',
  //   price: 19.99,
  //   quantity: 25,
  // },
  // Add more medicines as needed
];

const AvailableMedicine = (props) => {


  const allMedicines = [...DUMMY_MEDICINES, ...props.data];

  const medicineList = allMedicines.map((medicine) => (
    <MedicineItem
      key={medicine.id}
      id={medicine.id}
      name={medicine.medicineName}
      description={medicine.description}
      price={medicine.price}
      quantity={medicine.quantity}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{medicineList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMedicine;
