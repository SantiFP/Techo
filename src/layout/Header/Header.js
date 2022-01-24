import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Link,
  Button
} from '@mui/material'
import TechoLogo from '../../assets/images/negative_logo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Submenu } from '../../components/Submenu'
import HomeIcon from '@mui/icons-material/Home'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ScheduleIcon from '@mui/icons-material/Schedule'
import CategoryIcon from '@mui/icons-material/Category'
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import AddBoxIcon from '@mui/icons-material/AddBox'

export const Logo = () => {
  return (
    <Link
      component={RouterLink}
      style={{ color: 'white', textDecoration: 'none' }}
      to='/'
    >
      <Box
        component='img'
        sx={{
          height: 30,
          width: 'auto',
          display: 'flex',
          justifyCenter: 'center'
        }}
        alt='Techo Logo'
        src={TechoLogo}
      />
    </Link>
  )
}

const menu = [
  {
    name: 'Inicio',
    icon: <HomeIcon fontSize='small' />,
    to: '/',
    submenu: null
  },
  {
    name: 'Registros',
    icon: <AccountBalanceIcon fontSize='small' />,
    to: null,
    submenu: [
      {
        name: 'Años',
        icon: <CalendarTodayIcon fontSize='small' />,
        to: '/years'
      },
      {
        name: 'Temporalidades',
        icon: <ScheduleIcon fontSize='small' />,
        to: '/temporalities'
      },
      {
        name: 'Tipos',
        icon: <CategoryIcon fontSize='small' />,
        to: '/types'
      },
      {
        name: 'Pilares',
        icon: <ViewColumnIcon fontSize='small' />,
        to: '/pillars'
      },
      {
        name: 'Indicadores',
        icon: <EqualizerIcon fontSize='small' />,
        to: '/indicators'
      },
      {
        name: 'Focos',
        icon: <CenterFocusWeakIcon fontSize='small' />,
        to: '/spotlights'
      }
    ]
  },
  {
    name: 'Crear planificación',
    icon: <AddBoxIcon fontSize='small' />,
    to: '/planning',
    submenu: null
  }

]

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [sublinks, setSublinks] = useState([])
  const isMenuOpen = Boolean(anchorEl)

  const handleClick = (event, sublinks) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
    setSublinks(sublinks)
  }

  const onHandleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='sticky' elevation={0}>
      <Container>
        <Toolbar disableGutters>
          <Logo />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 5 }}>
            {menu.map(item => (
              <Button
                key={item.name}
                component={item.submenu ? null : RouterLink}
                to={item.submenu ? null : item.to}
                onClick={item.submenu ? (e) => handleClick(e, item.submenu) : null}
                startIcon={item.icon || null}
                endIcon={item.submenu ? <ArrowDropDownIcon /> : null}
                sx={{ my: 2, ml: 2, color: 'white' }}
              >
                {item.name}
              </Button>
            ))}
            <Submenu
              isMenuOpen={isMenuOpen}
              anchorEl={anchorEl}
              onHandleClose={onHandleClose}
              sublinks={sublinks}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
