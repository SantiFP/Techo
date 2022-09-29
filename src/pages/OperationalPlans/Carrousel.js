import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { ModalBody } from './ModalBody';
import { useState } from 'react';

function Example(props) {
  const [data, setData] = useState([{ descripcion: '', responsable: '' }]);
  const handleChange = () => {



  };

  const [body, setBody] = useState([
    <ModalBody titleModal={'Hola'} handleChange={handleChange} />,
    <ModalBody titleModal={'chau'} handleChange={handleChange} />,
  ]);
  // const []

  const handleAdd = (e) => {
    setBody([
      ...body,
      <ModalBody titleModal={'adios'} handleChange={handleChange} />,
    ]);
  };

  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <>
      <Carousel>{body.map((item) => item)}</Carousel>
      <Button onClick={handleAdd}>ADD</Button>
    </>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Example;
