import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useHistory } from "react-router-dom";
import DialogSuccess from "./DialogSuccess";


export default function DeleteFoda( {openDeleteFoda , title , subtitle , setOpenDeleteFoda } ) {

    const [open, setOpen] = React.useState(false);
    
    // abrir nuevo modal si eliminamos
    const handleDeleteFoda = () => {
        setOpen(true);
    };

    //cerrar premodal si presionamos cancelar
    const handleClosePremodal = () => {
        setOpenDeleteFoda(false)
        };
    
    let history = useHistory();

    const handleClose = () =>{
        history.push('/diagnostico')
    }

  //Text for modal
  const diagnosticSubtitle = `Ahora podes crear el F.O.D.A. para este año`;
  const diagnosticTitle = "¡F.O.D.A. ELIMINADO!";
  const buttonPrimaryText = "CREAR F.O.D.A.";

  return (
    <div>
      <Dialog
        open={openDeleteFoda}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xs"}
      >
        <DialogTitle
          id="alert-dialog-title"
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "600",
            paddingTop: 2,
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <DialogContentText
            id="alert-dialog-description"
            variant="body2"
            sx={{ textAlign: "center", paddingLeft: 1, paddingRight: 1 }}
          >
            {subtitle}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "center", paddingBottom: 2 }}
        >
          <Button variant="outlined" color="inherit" onClick={handleClosePremodal} >CANCELAR</Button>
          <Button variant="contained" color="error" onClick={handleDeleteFoda} autoFocus>
            ELIMINAR
          </Button>
        </DialogActions>
      </Dialog>
      <DialogSuccess
        open={open}
        han
        handleClose={handleClose}
        title={diagnosticTitle}
        subtitle={diagnosticSubtitle}
        buttonPrimaryText={buttonPrimaryText}
      />
    </div>
  );
}
