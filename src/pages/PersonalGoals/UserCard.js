import styled from '@emotion/styled';
import { Card, CardContent, CardMedia, IconButton, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import React from 'react';
import userImage from '../../assets/images/foto.png';

const CustomCard = styled(Card)(({ theme }) => ({

    backgroundColor: theme.palette.mode === "light" ? "#333" : "#F3F3F4",
    color: theme.palette.background.default,
    maxWidth: '285px',
    borderRadius: '10px',
    padding: '20px',
    position: 'relative',

}));

const CustomStack = styled(Stack)(({ theme }) => ({

    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    marginBottom: theme.spacing(4),

}));

const Titulo = styled(Typography)(({ theme }) => ({

    fontSize: theme.typography.body1.fontSize,
    fontWeight: "bold",
    textTransform: "uppercase",

}));

const EditButton = styled(EditIcon)(({ theme }) => ({

    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(.8),
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    '&:hover': {
        backgroundColor: 'rgb(0, 102, 154)'
    },
    transition: 'background-color 250ms'

}));

const UserCard = () => {
    return (

        <CustomCard>

            <CardContent sx={{ padding: 0 }} >
                <CustomStack sx={{ flexDirection: "column!important", alignItems: "center" }} >
                    <CardMedia
                        component="img"
                        image={userImage}
                        title="User Image"
                        sx={{
                            borderRadius: '50%',
                            height: 150,
                            width: 150,
                            mx: 'auto'
                        }}
                    />
                    <Titulo sx={{ fontSize: "20px!important" }} >
                        Juan Perez
                    </Titulo>
                </CustomStack>
                <CustomStack  >
                    <Titulo >
                        área:
                    </Titulo>
                    <Typography variant="body1" >
                        PPyP
                    </Typography>
                </CustomStack>
                <CustomStack >
                    <Titulo >
                        rol:
                    </Titulo>
                    <Typography variant="body1" >
                        Coordinador de programas
                    </Typography>
                </CustomStack>
                <CustomStack  >
                    <Titulo >
                        evaluación global:
                    </Titulo>
                    <Typography variant="body1" >
                        3,20
                    </Typography>
                </CustomStack>
                <CustomStack  >
                    <Titulo >
                        otros objetivos:
                    </Titulo>
                </CustomStack>
                <CustomStack>
                    <Typography variant="body1" >
                        Es responsable de <Typography variant='span' color={"primary"}>0 focos</Typography>
                    </Typography>
                </CustomStack>
                <CustomStack sx={{ marginBottom: "0!important" }}>
                    <Typography variant="body1" >
                        Es responsable de <Typography variant='span' color={"primary"}>2 planes operativos</Typography>
                    </Typography>
                </CustomStack>
            </CardContent>

            <IconButton sx={{ position: "absolute", top: "15px", right: "15px", padding:0 }} >
                <EditButton />
            </IconButton>

        </CustomCard>

    );
}

export default UserCard;