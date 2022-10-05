import { NavLink } from 'react-router-dom';
import PageTitle from 'components/PageTitle'
import { useState } from 'react'
import SearchStack from '../../components/SearchStack';
import { Container } from '@mui/system';
import { Modal, Box} from '@mui/material';
import { ModalBody, style } from './ModalBody';
import TableOperationalPlans from './TableOperationalPlans';

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


    const handleOpenModal = () =>setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)

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
                <TableOperationalPlans/>
                <br/><br/>
                <TableOperationalPlans />
            </Container>
            <Modal
                open={isOpenModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ModalBody crearObjetivo= {crearObjetivo}  titleModal={titleModal} handleCloseModal={handleCloseModal}/>
                </Box>
            </Modal>
        </>
    )
}

export default OperationalPlans
