
import React from 'react'
import { Typography, Box, Container } from '@mui/material'


export const Home = () => {
  
  const userData = JSON.parse(localStorage.getItem('profile'))
  console.log(userData)
  return (
    <Container
    disableGutters
    maxWidth={false}
    sx={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}
    >
      <Box
        component='img'
        src={userData.profileObj.imageUrl}
        sx={{maxWidth: '5%', objectFit: 'cover', borderRadius: '50%' }}
      />
      <Typography variant='h2' textAlign='center'>{userData.profileObj.name}</Typography>
      <Typography variant='h2' textAlign='center'>{userData.profileObj.email}</Typography>

      <Typography variant='h1' textAlign='center' sx={{ textTransform: 'uppercase' }}>home</Typography>

    </Container>
    )
    
}
