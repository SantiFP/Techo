import { NavLink } from 'react-router-dom';
import PageTitle from 'components/PageTitle'
import { useState } from 'react'
import BasicGroupingDemo from './Table2';
import SearchStack from '../../components/SearchStack';
import { Container } from '@mui/system';
import { Modal, Box, Typography, Toolbar, Button } from '@mui/material';
import { ModalBody, style } from './ModalBody';
import Example from './Carrousel'

const title = "Planes Operativos"
const crearObjetivo = true 
const titleModal = "Crear Objetivo"
const styleLinks = ({ isActive }) =>
    isActive
        ? {
            color: '#ffffff',
            background: '#ea6d4f',
        }
        : {
            color: '#ea6d4f',
        };


const OperationalPlans = () => {
    const [isOpenModal, setOpenModal] = useState(false)
    const [isOpenModalDetails, setOpenModalDetails] = useState(false)
    const [indicatorDetails, setIndicatorDetails] = useState({})


    const handleOpenModal = () =>setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)

    const handleOpenModalDetails = (indicator) => {
        setIndicatorDetails(indicator)
        setOpenModalDetails(true)
    }
    const handleCloseModalDetails = () => {
        setIndicatorDetails({})
        setOpenModalDetails(false)
    }

    return (
        <>
            <Container>
                <PageTitle title={title} buttonTitle={"Crear Objetivo"} handleOpenModal={handleOpenModal} />
                <nav className="diagnostico-nav">
                    <NavLink
                        to="operational-plans"
                        style={styleLinks}
                        className="navlinks"
                    >
                        PERSONAS
                    </NavLink>
                    <NavLink to="/operational-plans" style={styleLinks} className="navlinks">
                        GESTIÓN COMUNITARIA
                    </NavLink>
                    <NavLink
                        to="operational-plans"
                        style={styleLinks}
                        className="navlinks"
                    >
                        PROGRAMAS
                    </NavLink>
                    <NavLink
                        to="operational-plans"
                        style={styleLinks}
                        className="navlinks"
                    >
                        DESARROLLO DE FONDOS
                    </NavLink>
                </nav>
                <SearchStack
                    quantity={2}
                    title="Objetivos en total"
                    searchPlaceholder="Buscar objetivo"
                />
                <BasicGroupingDemo/>
                <BasicGroupingDemo />
                <Example/>
            </Container>
            <Modal
                open={isOpenModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ModalBody crearObjetivo= {crearObjetivo}  titleModal={titleModal}/>

                    <div align='center'>
                        <Button
                            variant='contained'
                            onClick={handleCloseModal}
                            disableElevation
                            sx={{ mr: 4, backgroundColor: 'white', color: '#0092DD', border: `1px solid #0092DD` }}
                            // 
                            colSpan={12}
                        >
                            CANCELAR
                        </Button>
                        <Button
                            variant='contained'
                            // onClick={}
                            disableElevation
                            sx={{}}
                            // 
                            colSpan={12}
                        >
                            CONFIRMAR
                        </Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default OperationalPlans
