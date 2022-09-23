import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import operationalPlans from './../../data/operationalPlans'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { Tooltip, Container, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'


const columns = operationalPlans.columns

const rows = operationalPlans.rows

export default function ColumnGroupingTable() {

  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead >
          <TableRow>
            <TableCell sx={{ bgcolor: 'info.main', color: 'white' }} align="left" colSpan={12}>
              REALIZAR DISEÑO DEL SISTEMA DE PLANIFICACIÓN <EditOutlinedIcon sx={{ color: 'white' }} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ bgcolor: 'info.main', color: 'white', p: 0, pr: '28%', border: 'none' }} align="right" colSpan={12}>
              EVALUACIÓN
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ bgcolor: 'info.main', color: 'white', }} align="left">
              RESULTADOS CLAVE
            </TableCell>
            <TableCell sx={{ bgcolor: 'info.main', color: 'white', }} align="left">
              RESPONSABLE
            </TableCell>
            <TableCell sx={{ bgcolor: 'info.main', color: 'white', }} align="right">
              T1
            </TableCell>
            <TableCell sx={{ bgcolor: 'info.main', color: 'white', }} align="right">
              T2
            </TableCell>
            <TableCell sx={{ bgcolor: 'info.main', color: 'white', }} align="right">
              T3
            </TableCell>
            <TableCell sx={{ bgcolor: 'info.main', color: 'white', }} align="right">
              T4
            </TableCell>
            <TableCell sx={{ bgcolor: 'info.main', color: 'white', }} align="right">
              AÑO
            </TableCell>
            <TableCell sx={{ bgcolor: 'info.main', color: 'white', }} align="right">
              OPCIONES
            </TableCell>

            {/* <TableCell sx={{ bgcolor: 'info.main', color: 'white', }} align="center" colSpan={3}>
              OPCIONES
            </TableCell> */}
          </TableRow>
          {/* <TableRow></TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ top: 57, minWidth: column.minWidth, }}
                sx={{ bgcolor: 'info.main', color: 'white' }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow> */}
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow align='center' key={row.id}>

                <TableCell align='left' >{row.results}</TableCell>
                <TableCell align='left'>{row.responsable}</TableCell>
                <TableCell align='right'>{row.T1}</TableCell>
                <TableCell align='right'>{row.T2}</TableCell>
                <TableCell align='right'>{row.T3}</TableCell>
                <TableCell align='right'>{row.T4}</TableCell>
                <TableCell align='right'>{row.year}</TableCell>
                <TableCell align='right'>{<>
                  <GridActionsCellItem
                    key={1}
                    icon={<Tooltip title="Editar"><EditIcon sx={{ color: '#fff' }} /></Tooltip>}
                    label='Editar'
                    onClick={() => window.alert('Iría a EDITAR un elemento.')}
                    sx={{ backgroundColor: '#0092DD', '&:hover': { backgroundColor: 'orange' } }}
                  />
                  <GridActionsCellItem
                    key={2}
                    icon={<Tooltip title="Eliminar"><DeleteIcon sx={{ color: '#fff' }} /></Tooltip>}
                    label='Eliminar'
                    onClick={() => window.alert('Iría a ELIMINAR un elemento.')}
                    sx={{ backgroundColor: '#0092DD', '&:hover': { backgroundColor: 'orange' }, margin:1 }}
                  /> </>}
                </TableCell>

              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
