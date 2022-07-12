import { useRef, useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { display } from '@mui/system';
import './diagnostico.css'

export const Diagnostico = () => {

    const [form, setForm] = useState([]);


    const anioRef = useRef();
    const fortalezasRef = useRef();
    const oportunidadesRef = useRef();
    const debilidadesRef = useRef();
    const amenazasRef = useRef();
    const formRef = useRef();

    const handleChange = (e) => {
        console.log(e.target.value)
      };

      const handleSubmit = (e) => {
        e.preventDefault();
       
        setForm([
            ...form,
            {
                Año: anioRef.current.value,
              Fortalezas: fortalezasRef.current.value,
              Oportunidades: oportunidadesRef.current.value,
              Debilidades: debilidadesRef.current.value,
              Amenazas: amenazasRef.current.value,
          }
          ]);
       //   formRef.reset();
          alert("El formulario se ha enviado");
      };

    return (
        <Box>
            <Typography variant='h2' sx={{ color: '#27759e', fontSize: '35px', textAlign:'center' }}>DIAGNÓSTICO</Typography>
            <Box sx={{marginTop:'20px', marginBotton:'40px'}}>
                <Button sx={{color:'#ea6d4f'}}>CREAR F.O.D.A.</Button>
                <Button sx={{color:'#ea6d4f'}}>VER AÑOS ANTERIORES</Button>
                <Button sx={{color:'#ea6d4f'}}>VER DATA STUDIO</Button>
            </Box>
            <Typography variant='h6' sx={{fontWeight:'bold'}}>AÑO</Typography>
            <form  onSubmit={handleSubmit}  ref={formRef}>
                <select name="anio" required className='select' onChange={handleChange} value={form.anio} ref={anioRef}>
                    <option disabled selected>SELECCIONAR</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <textarea placeholder='ESCRIBIR...' required className='textarea blue' rows='8'cols='115'wrap='hard' maxlength='500' onChange={handleChange} name="fortalezas" ref={fortalezasRef}></textarea>
                        <textarea placeholder='ESCRIBIR...' required className='textarea green' rows='8'cols='115'wrap='hard' maxlength='500'   name="oportunidades"  onChange={handleChange} ref={oportunidadesRef}></textarea>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <textarea placeholder='ESCRIBIR...' required className='textarea yellow' rows='8'cols='115'wrap='hard' maxlength='500'  name='debilidades'   onChange={handleChange} ref={debilidadesRef}></textarea>
                        <textarea placeholder='ESCRIBIR...' required className='textarea orange' rows='8'cols='115'wrap='hard' maxlength='500'  name='amenazas'  onChange={handleChange} ref={amenazasRef}></textarea>
                    </Box>
                    <input type='submit' className='input-button' value='GUARDAR'></input>
                </Box>
                
            </form>

        </Box>


    )
}