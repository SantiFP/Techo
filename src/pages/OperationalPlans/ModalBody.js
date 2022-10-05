import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { MenuItem, Select, TextField, Toolbar } from '@mui/material';
import operationalPlans from '../../data/operationalPlans';

const crearObjetivo = true;

const rows = operationalPlans.rows;

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

export const ModalBody = ({
  crearObjetivo,
  titleModal,
  isEditButton,
  handleChange,
  handleCloseModal,
  handleAdd,
  handleSubmit
}) => {
  return (
    <div>
      <Typography
        variant="h1}2"
        sx={{ textTransform: 'uppercase' }}
        id="modal-modal-title"
        component="h2"
        align="center"
        color="#005D8D"
      >
        {isEditButton ? 'Editar resultado clave' : titleModal}
      </Typography>
      <Typography
        color="#005D8D"
        id="modal-modal-description"
        sx={{ textTransform: 'uppercase', fontSize: 15, fontWeight: 'bold' }}
      >
        Categoría
      </Typography>
      <br />
      <nav>
        <NavLink to="operational-plans" style={styleLinks} className="navlinks">
          PERSONAS
        </NavLink>
        <NavLink
          to="/operational-plans"
          style={styleLinks}
          className="navlinks"
        >
          GESTIÓN COMUNITARIA
        </NavLink>
        <NavLink to="operational-plans" style={styleLinks} className="navlinks">
          PROGRAMAS
        </NavLink>
        <NavLink to="operational-plans" style={styleLinks} className="navlinks">
          DESARROLLO DE FONDOS
        </NavLink>
      </nav>
      {!crearObjetivo && <br />}
      {crearObjetivo && (
        <>
          <Typography
            sx={{
              mt: 2,
              textTransform: 'uppercase',
              fontSize: 15,
              fontWeight: 'bold',
            }}
            id="modal-modal-title"
            align="left"
            color="#005D8D"
          >
            Nombre Objetivo
          </Typography>
          <input
            placeholder="ESCRIBIR..."
            style={{
              border: `1px solid #0092DD`,
              borderRadius: 5,
              height: 40,
              width: '100%',
            }}
          />
          <hr />
        </>
      )}
      <Toolbar disableGutters>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontSize: 15,
            fontWeight: 'bold',
          }}
          id="modal-modal-title"
          align="left"
          color="#005D8D"
        >
          Descripción resultado clave
          <TextField
            name="resultados_clave"
            onChange={handleChange}
            placeholder="ESCRIBIR..."
            size="small"
            sx={{
              borderRadius: 5,
              height: '40px',
            }}
            focused
            fullWidth
          />
        </Typography>
        <Typography
          sx={{
            ml: 2,
            textTransform: 'uppercase',
            fontSize: 15,
            fontWeight: 'bold',
          }}
          id="modal-modal-title"
          align="center"
          color="#005D8D"
        >
          responsable resultado
          <Select
            name="responsable"
            id="responsable"
            size="small"
            onChange={handleChange}
            color="primary"
            sx={{
              width: '100%',
            }}
            focused
          >
            {rows.map((row) => {
              const { responsable, id } = row;
              return <MenuItem key={id} value={responsable}>{responsable}</MenuItem>;
            })}
          </Select>
        </Typography>
      </Toolbar>
      <Typography
        sx={{
          mt: 2,
          textTransform: 'uppercase',
          fontSize: 15,
          fontWeight: 'bold',
        }}
        id="modal-modal-title"
        align="left"
        color="#005D8D"
      >
        evaluación
      </Typography>
      <Toolbar>
        <Typography
          sx={{
            m: 2,
            textTransform: 'uppercase',
            fontSize: 15,
            fontWeight: 'bold',
          }}
          id="modal-modal-title"
          align="left"
          color="#005D8D"
        >
          1T
        </Typography>
        <TextField
          name="T1"
          onChange={handleChange}
          sx={{
            borderRadius: 5,
            height: 40,
            width: '10%',
          }}
          focused
          size="small"
        />
        <Typography
          sx={{
            m: 2,
            textTransform: 'uppercase',
            fontSize: 15,
            fontWeight: 'bold',
          }}
          id="modal-modal-title"
          align="left"
          color="#005D8D"
        >
          2T
        </Typography>
        <TextField
          name="T2"
          onChange={handleChange}
          sx={{
            borderRadius: 5,
            height: 40,
            width: '10%',
          }}
          focused
          size="small"
        />
        <Typography
          sx={{
            m: 2,
            textTransform: 'uppercase',
            fontSize: 15,
            fontWeight: 'bold',
          }}
          id="modal-modal-title"
          align="left"
          color="#005D8D"
        >
          3T
        </Typography>
        <TextField
          name="T3"
          onChange={handleChange}
          sx={{
            borderRadius: 5,
            height: 40,
            width: '10%',
          }}
          focused
          size="small"
        />
        <Typography
          sx={{
            m: 2,
            textTransform: 'uppercase',
            fontSize: 15,
            fontWeight: 'bold',
          }}
          id="modal-modal-title"
          align="left"
          color="#005D8D"
        >
          4T
        </Typography>
        <TextField
          name="T4"
          onChange={handleChange}
          sx={{
            borderRadius: 5,
            height: 40,
            width: '10%',
          }}
          focused
          size="small"
        />
        <Typography
          sx={{
            m: 2,
            textTransform: 'uppercase',
            fontSize: 15,
            fontWeight: 'bold',
          }}
          id="modal-modal-title"
          align="left"
          color="#005D8D"
        >
          año
        </Typography>
        <TextField
          name="AÑO"
          onChange={handleChange}
          sx={{
            borderRadius: 5,
            height: 40,
            width: '10%',
          }}
          focused
          size="small"
        />
      </Toolbar>
      <hr />
      <div align='center'>
        <Button
          variant='contained'
          onClick={handleCloseModal}
          disableElevation
          sx={{ mr: 4, backgroundColor: 'white', color: '#0092DD', border: `1px solid #0092DD` }}
          colSpan={12}
        >
          CANCELAR
        </Button>
        <Button
          variant='contained'
          onClick={handleSubmit}
          disableElevation
          colSpan={12}
        >
          CONFIRMAR
        </Button>
      </div>
    </div>
  );
};
