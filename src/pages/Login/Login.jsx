import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import Typography  from '@mui/material/Typography'
import Box from "@mui/system/Box"
import img_login from '../../assets/img/imagen-login.png'
import TECHO_logo from '../../assets/img/logo-login.png'
import { Block } from "@mui/icons-material"

const Login = () => {
    return (
        <Container disableGutters maxWidth={false} sx={{
            display:'flex',
            }}>
            <Box component="img"
                src={img_login}
                sx={{height:'100vh'}}
            />
            
            <Container 
                sx={{
                    width:'100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    src={TECHO_logo}
                    sx={{
                        width:435,
                        mb:5
                    }}
                    alt="TECHO LOGO"
                />

                <Typography variant="body1" 
                sx={{
                    textAlign:'center', 
                    mb:5,
                    fontWeight:650
                }}
                >INICIÁ SESIÓN PARA ACCEDER AL<br/>SISTEMA DE PLANIFICACIÓN ANUAL
                </Typography>

                <Button variant="contained" href="https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online&client_id=195002437870-rp8bdf09m6uaan83vr7g9gs7cpalavsd.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Flogin.techo.org&state&scope=email&approval_prompt=auto">Ingresar con el correo de google</Button>
                <Typography color="primary" 
                    sx={{
                        position:"relative",
                        fontSize:12,
                        color:"#005D8D",
                        top:'25vh'
                        }}>
                            COPYRIGHT TECHO © 2018-2021
                </Typography>
            </Container>
        </Container>
    )
}

export default Login
