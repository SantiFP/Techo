import React from 'react';
import { Typography } from '@mui/material';
import GreenBox from './GreenBox/GreenBox';
import './home.css';

export const Home = () => {

  const usuario = "ELÍAS";

  return (
    <div>
      <Typography variant='h1' className='title'>¡HOLA {usuario}! 👋🏻</Typography>
      <GreenBox />
    </div>

  )
}
