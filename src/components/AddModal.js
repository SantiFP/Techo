import { TextField, MenuItem, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { toSingular } from '../misc/utils'
const statuses = [
  { id: 1, label: 'Activo', value: true },
  { id: 2, label: 'Inactivo', value: false }
]
export default function AddModal ({ isOpenModal, handleCloseModal, title }) {
  return (
    <Dialog
      fullWidth
      maxWidth='sm'
      open={isOpenModal}
      onClose={handleCloseModal}
    >
      <DialogTitle>Agregar {toSingular(title).toLowerCase()}</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText> */}
        <TextField
          autoFocus
          margin='normal'
          label={toSingular(title)}
          type='text'
          variant='standard'
          fullWidth
        />
        <TextField
          margin='normal'
          select
          label='Seleccioná el estado'
          variant='standard'
          fullWidth
        >
          {statuses.map((status) => (
            <MenuItem key={status.value} value={status.value}>
              {status.label}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} variant='outlined'>Cancelar</Button>
        <Button onClick={handleCloseModal} variant='contained' disableElevation>Guardar</Button>
      </DialogActions>
    </Dialog>
  )
}
