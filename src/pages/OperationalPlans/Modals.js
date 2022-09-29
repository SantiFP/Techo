import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import operationalPlans from '../../data/operationalPlans'

const crearObjetivo = true

const rows= operationalPlans.rows
console.log('rows', rows[0].RESPONSABLE)

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

const styleLinks = ({ isActive }) =>
  isActive
    ? {
      color: '#ffffff',
      background: '#ea6d4f',
    }
    : {
      color: '#ea6d4f',
    };

export const Body = ({crearObjetivo, titleModal, isEditButton}) =>{


  return(
    <div >
    <Typography variant='h1}2' sx={{ textTransform: 'uppercase' }} id="modal-modal-title" component="h2" align='center' color='#005D8D'>
    {isEditButton ? "Editar resultado clave" : titleModal}
    </Typography>
    <Typography color='#005D8D' id="modal-modal-description" sx={{ textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }}>
      Categoría
    </Typography>
    <br/> 
    <nav >
      <NavLink
        to="operational-plans"
        style={styleLinks}
        className="navlinks"

      >
        PERSONAS
      </NavLink>
      <NavLink to="/operational-plans" style={styleLinks} className="navlinks">
        GESTIÓN COMUNITARIA
      </NavLink>
      <NavLink
        to="operational-plans"
        style={styleLinks}
        className="navlinks"
      >
        PROGRAMAS
      </NavLink>
      <NavLink
        to="operational-plans"
        style={styleLinks}
        className="navlinks"
      >
        DESARROLLO DE FONDOS
      </NavLink>
    </nav>
    {!crearObjetivo && <br/> }
    {crearObjetivo && 
    <>
      <Typography sx={{ mt: 2, textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }} id="modal-modal-title" align='left' color='#005D8D'>
        Nombre Objetivo
      </Typography>
      <input placeholder='ESCRIBIR...' style={{ border: `1px solid #0092DD`, borderRadius: 5, height: 40, width: '100%' }} ></input>
      <hr />
      </> 
    }
    <Toolbar disableGutters >
      <Typography sx={{ mr: 4, textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }} id="modal-modal-title" align='left' color='#005D8D'>
        Descripción resultado clave
        <input placeholder='ESCRIBIR...' style={{ border: `1px solid #0092DD`, borderRadius: 5, height: 40, width: '100%' }} />
      </Typography>
      <Typography sx={{ ml: 2, textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }} id="modal-modal-title" align='center' color='#005D8D'>
        responsable resultado
        <select name="responsable" id="responsable" style={{ border: `1px solid #0092DD`, borderRadius: 5, height: 40, width: '82%' }} >
        {rows.map(row => {
          const {RESPONSABLE, id} = row
          return(
            <option key={id}>{RESPONSABLE}</option>
            )
          
        })}
        </select>
      </Typography>
    </Toolbar>
    <Typography sx={{ mt: 2, textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }} id="modal-modal-title" align='left' color='#005D8D'>
      evaluación
    </Typography>
    <Toolbar>
      <Typography sx={{ m: 2, textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }} id="modal-modal-title" align='left' color='#005D8D'>
        1T
      </Typography>
      <input style={{ border: `1px solid #0092DD`, borderRadius: 5, height: 40, width: '10%' }} ></input>
      <Typography sx={{ m: 2, textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }} id="modal-modal-title" align='left' color='#005D8D'>
        2T
      </Typography>
      <input style={{ border: `1px solid #0092DD`, borderRadius: 5, height: 40, width: '10%' }} ></input>
      <Typography sx={{ m: 2, textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }} id="modal-modal-title" align='left' color='#005D8D'>
        3T
      </Typography>
      <input style={{ border: `1px solid #0092DD`, borderRadius: 5, height: 40, width: '10%' }} ></input>
      <Typography sx={{ m: 2, textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }} id="modal-modal-title" align='left' color='#005D8D'>
        4T
      </Typography>
      <input style={{ border: `1px solid #0092DD`, borderRadius: 5, height: 40, width: '10%' }} ></input>
      <Typography sx={{ m: 2, textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }} id="modal-modal-title" align='left' color='#005D8D'>
        año
      </Typography>
      <input style={{ border: `1px solid #0092DD`, borderRadius: 5, height: 40, width: '10%' }} ></input>
    </Toolbar>
    <hr />
    {!isEditButton && 
    <Button>
      Agregar otro resultado
    </Button>}
    <br />

  </div>
  )
}
  
