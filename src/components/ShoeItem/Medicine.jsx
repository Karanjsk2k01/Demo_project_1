import { Fragment, useState } from 'react';
import AvailableMedicine from './AvailableMedicine';
import Form from '../Form/Form';

const Medicine = () => {
  const [value, setValue] = useState([]);

  let entries = (newValue) => {
    setValue(newValue);
  };


  return (
    <Fragment>
      <Form onpassed={entries} />
      <AvailableMedicine data={value} />
    </Fragment>
  );
};

export default Medicine;
