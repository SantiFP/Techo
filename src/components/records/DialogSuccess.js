import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import highFive from '../../assets/images/high-five.svg';
import { useHistory } from 'react-router-dom';
export default function DialogSuccess({open , handleClose , title , subtitle , buttonPrimaryText }) {
 
  let history = useHistory ();
  const handleBackToHome = () =>{
    history.push('/')
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xs"}
      >
        <DialogTitle id="alert-dialog-title" variant='h5' sx={{ textAlign: 'center' , color:'#0092DD' , fontWeight:'600' ,  paddingTop:2}}>
          {title}
        </DialogTitle>
        <DialogContent sx={{display:"flex" , flexDirection:"column" , alignItems:"center"}}>
          <DialogContentText
            id="alert-dialog-description"
            variant="body2"
            sx={{ textAlign: 'center' , paddingLeft:1 , paddingRight:1 }}
          >
           {subtitle} 
          </DialogContentText>
          <img src={highFive} style={{width:230}}></img>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' , paddingBottom:2 }}>
          <Button onClick={handleBackToHome} variant='outlined'>VOLVER AL INICIO</Button>
          <Button onClick={handleClose} variant='contained' autoFocus>
            {buttonPrimaryText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
