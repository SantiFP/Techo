import React from 'react'
import { Typography, Button, Box } from '@mui/material';

function Tags({tagProp, backgroundCol, x}) {

    let tag = tagProp
    console.log(tag)

    

  return (
    <Box>
{tag.map((tag, index) => (
        <Box sx={{ backgroundColor:backgroundCol, padding: '3px 5px ', borderRadius: '5px', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', margin:'5px', flexWrap: 'nowrap'  }} key={index}>
          <Box sx={{color:'#000000'}}  >{tag}</Box>
          <Box sx={{height: '20px',
width: '20px',

display:'inline-block',
color:x,
borderRadius: '50%',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
marginLeft: '.5em',
fontSize: '18px',
fontWeight: 'bolder',
cursor: 'pointer', }} >&times;</Box>
        </Box>
      ))}
      
    </Box>
    
  )
}

export default Tags