import React from 'react'
import { Typography, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../pages/diagnostico.css'
import { useRef, useState, useContext, useEffect } from 'react';
import FodaContext from '../contexts/FodaContext'
import { KeyOffRounded, KeyOffTwoTone, LensTwoTone, Tag } from '@mui/icons-material';
import '../pages/diagnostico.css'
import Tags from './Tags';
import { FaEdit} from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri'


function VerFodaAnterior() {
  const [tagsActual, setTagsActual] = useState([]);

  const [fortalezasActual, setFortalezasActual] = useState([]);
  const [oportunidadesActual, setOportunidadesActual] = useState([]);
  const [debilidadesActual, setDebilidadesActual] = useState([]);
  const [amenazasActual, setAmenazasActual] = useState([]);



  console.log(fortalezasActual)
  const { handleChange, takeFodaToContext, form, setForm, setContextFortalezas, contextFortalezas } = useContext(FodaContext);



  
  console.log(fortalezasActual)



  const styleLinks = ({ isActive }) =>
    isActive
      ? {
        color: '#ffffff',
        background: '#ea6d4f',

      }
      : {
        color: '#ea6d4f',
      }

useEffect(() => {
  
    const objetoDelAnioActual = form.find(el => el.anio == 2022)
    if (objetoDelAnioActual !== undefined) {

      setTagsActual([objetoDelAnioActual]);
      console.log(tagsActual);
      // console.log(form)
      let arrAuxActual = []
      tagsActual.forEach(el => {
        for (const key in el) {
          arrAuxActual.push(el[key])
        }
      });

      setFortalezasActual(arrAuxActual[1]);
      setOportunidadesActual(arrAuxActual[2]);
      setDebilidadesActual(arrAuxActual[3]);
      setAmenazasActual(arrAuxActual[4])

      console.log(fortalezasActual)
    } else {
      alert(`Año 2022 no ha sido creado`)
    }

  
}, [form])


   


  function removeTagVer(index) {
    setTagsActual(tagsActual.filter((el, i) => i !== index))

  }

  function handleSubmitVer () {
    console.log("submit")
  }

  function handleCancelVer () {
    console.log("cancel")
  }

  function handleEliminarVer () {
    console.log("eliminar")
  }

  function handleEditarVer (){
    console.log("editar")
  }

  const buttonStyle = {
    margin: '5px 5px auto',
  backgrounCcolor:'#0092dd',
  color: ' #0092DD', 
  padding: '5px 15px 5px 15px',
  borderRadius: '5px', 
  padding:'10px',
  border:'2px solid  #0092DD'
}

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h2' sx={{ color: '#27759e', fontSize: '35px', textAlign: 'center' }}>DIAGNÓSTICO</Typography>
      <nav className='diagnostico-nav'>
      <NavLink to="/diagnostico/fodaActual" style={styleLinks} className="navlinks">F.O.D.A ACTUAL</NavLink>
        <NavLink to="/diagnostico" style={styleLinks} className="navlinks">CREAR F.O.D.A.</NavLink>
        <NavLink to="/diagnostico/verFodaAnterior" style={styleLinks} className="navlinks">VER AÑOS ANTERIORES</NavLink>
        <NavLink to="/diagnostico/dataStudio" style={styleLinks} className="navlinks">VER DATA STUDIO</NavLink>



      </nav>
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:"10px"}}>
      <Typography variant='h6' sx={{ fontWeight: 'bold' }}>AÑO 2022</Typography>
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
    
     
        <button type='button' style={buttonStyle} onClick={handleEditarVer}><FaEdit style={{marginRight:'5px'}}/>EDITAR</button>
        <button style={buttonStyle} onClick={handleEliminarVer}><RiDeleteBin5Fill style={{marginRight:'5px'}}/>ELIMINAR</button>
        
      </Box>
      
      </Box>
      

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>

            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>FORTALEZAS</Typography>



            <Box sx={{ height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #26a7ec', backgroundColor: '#CFE5F1', 
          
          display: 'flex', flexDirection:'row',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '0.5em', }}>
              {
                fortalezasActual
                  ? <Tags tagProp={fortalezasActual} backgroundCol={'#80c8ee'} x={'#0092DD'}></Tags>
                  : <p></p>
              }


            </Box>


          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>OPORTUNIDADES</Typography>
            <Box sx={{ height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #70AD47', backgroundColor: '#DFE9DA',  display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '0.5em', }}>
              {
                oportunidadesActual
                  ? <Tags tagProp={oportunidadesActual} backgroundCol={'#b7d6a3'} x={'#70AD47'}></Tags>
                  : <p></p>
              }


            </Box>
          </Box>

        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>DEBILIDADES</Typography>
            <Box sx={{ height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #F8C146', backgroundColor: '#F4ECDA',  display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '0.5em',  }}>
              {
                debilidadesActual
                  ? <Tags tagProp={debilidadesActual} backgroundCol={'#fbe0a2'} x={'#F8C146'}></Tags>
                  : <p></p>
              }


            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant='h6' sx={{ fontWeight: 'bold', fontSize: 15, marginLeft: 2 }}>AMENAZAS</Typography>
            <Box sx={{ height: '100px', borderRadius: '5px', margin: '10px', border: '4px solid #EA6D4F', backgroundColor: '#F2DEDA',  display: 'flex',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '0.5em', }}>
              {
                amenazasActual
                  ? <Tags tagProp={amenazasActual} backgroundCol={'#f4b6a7'} x={'#EA6D4F'}></Tags>
                  : <p></p>
              }


            </Box>
          </Box>

        </Box>
        <Box sx={{display:'flex', flexDirection:'row', marginTop:'10px'}}>
        <input type='button' style={buttonStyle} onClick={handleSubmitVer} value="GUARDAR"></input>
        <button style={buttonStyle} onClick={handleCancelVer}>CANCELAR</button>
        </Box>
        
      </Box>

    </Box>
  )
}

export default VerFodaAnterior
