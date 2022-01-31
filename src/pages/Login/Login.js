import React from 'react'
import GoogleLogin from 'react-google-login'
import { UseSessionContext } from '../../context/sessionContext'
import { Redirect } from 'react-router-dom'
import { Container, Stack, Button, Typography, Box } from '@mui/material'
import IMAGE_LOGIN from '../../assets/img/imagen-login.png'
import TECH_LOGO from '../../assets/img/logo-login.png'
import GoogleIcon from '@mui/icons-material/Google'


const Login = () => {
  const {setProfileObj} = UseSessionContext()
 
  const responseGoogle = async (response)  => {
    await setProfileObj(response)
    console.log(response);
    console.log(response.profileObj)
    if(localStorage.getItem('profile') !== '{}' || localStorage.getItem('profile') !== null){
      return <Redirect to='/home'/>
    }
  }
 
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ display: 'flex' }}
    >
      <Box
        component='img'
        src={IMAGE_LOGIN}
        sx={{ minHeight: '100vh', maxWidth: '50%', objectFit: 'cover' }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
        <Stack spacing={4} justifyContent='center' alignItems='center' flexGrow='1'>
          <Box
            component='img'
            src={TECH_LOGO}
            sx={{
              width: 435,
              height: 'auto'
            }}
            alt='TECHO LOGO'
          />

          <Typography
            variant='subtitle2'
            sx={{
              textAlign: 'center',
              textTransform: 'uppercase'
            }}
          >
            Iniciá sesión para acceder al<br />sistema de planificación anual
          </Typography>

          <GoogleLogin
            clientId="192806135807-ecaap9fck05fg52s6dja4mu3087tkrtt.apps.googleusercontent.com"
            // buttonText="Ingresar con el correo de google"
            render={renderProps => (
              <Button
              onClick={renderProps.onClick} 
              disabled={renderProps.disabled}
              startIcon={<GoogleIcon />}
              variant='contained'
              href='https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online&client_id=195002437870-rp8bdf09m6uaan83vr7g9gs7cpalavsd.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Flogin.techo.org&state&scope=email&approval_prompt=auto'
              disableElevation
            >
              Ingresar con el correo de google
            </Button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

          {/* <Button
            startIcon={<GoogleIcon />}
            variant='contained'
            href='https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online&client_id=195002437870-rp8bdf09m6uaan83vr7g9gs7cpalavsd.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Flogin.techo.org&state&scope=email&approval_prompt=auto'
            disableElevation
          >
            Ingresar con el correo de google
          </Button> */}

        </Stack>
        <Typography
          color='primary'
          variant='h6'
          sx={{
            textTransform: 'uppercase',
            mb: 2
          }}
        >
          Copyright Techo © 2018-2021
        </Typography>
      </Box>
    </Container>
  )
}

export default Login
