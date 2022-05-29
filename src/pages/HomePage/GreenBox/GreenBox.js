import React from 'react';
import { Typography } from '@mui/material';
import './greenBox.css';
import BudgetPeople from './Graphs/BudgetPeople';
import BudgetTerritory from './Graphs/BudgetTerritory';

function GreenBox() {

const ingresos = 22200364;
const egresos = 1000000;
const saldo = 21200364;

  return (
    <div className='greenBox-container'>
        <div className='greenBox-container-texts'>
        <Typography variant='h2' className='subtitle'>PRESUPUESTO</Typography>
        <Typography variant='h3'className='text'>Ingresos = <span className='greenBox-ingresos'>{ingresos}</span></Typography>
        <Typography variant='h3'className='text'>Egresos =  <span className='greenBox-egresos'>{egresos}</span></Typography>
        <Typography variant='h3'className='text'>Saldo =    <span className='greenBox-saldo'>{saldo}</span></Typography>
        </div>
        <div className='greenBox-container-graphs'>
          <div className="budgetPeople-graph"><BudgetPeople /></div>
          <div className="budgetPeople-graph"><BudgetTerritory /></div>
        
        
        </div>

    </div>
  )
}

export default GreenBox