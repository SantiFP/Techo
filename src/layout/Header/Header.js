import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  AppBar,
  Toolbar,
  // Container,
  Link,
  Button,
  IconButton
} from '@mui/material'
import TechoLogo from 'assets/images/negative_logo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import Submenu from 'components/Submenu'
// import HomeIcon from '@mui/icons-material/Home'
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import ScheduleIcon from '@mui/icons-material/Schedule'
import CategoryIcon from '@mui/icons-material/Category'
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import ViewColumnIcon from '@mui/icons-material/ViewColumn'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import useUser from 'hooks/useUser'
import UserMenu from 'components/UserMenu'
import { useColorMode } from 'theme/Theme'
import { useTheme } from '@emotion/react'

export const Logo = () => {
  return (
    <Link
      component={RouterLink}
      style={{ color: 'white', textDecoration: 'none', backgroundColor: '#333', height: '115px', width: '245px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      to='/'
    >
      <Box
        component='img'
        sx={{
          height: 50,
          width: 'auto',
          // display: 'flex',
          // justifyCenter: 'center',
          // backgroundColor: 'black'
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
    // icon: <HomeIcon fontSize='small' />,
    to: '/',
    submenu: null
  },
  {
    name: 'Registros',
    // icon: <AccountBalanceIcon fontSize='small' />,
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

export default function Header() {

  const [anchorEl, setAnchorEl] = useState(null)
  const [sublinks, setSublinks] = useState([])
  const isMenuOpen = Boolean(anchorEl)
  const { isLogged } = useUser()

  const handleClick = (event, sublinks) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
    setSublinks(sublinks)
  }

  const onHandleClose = () => {
    setAnchorEl(null)
  }

  const colorMode = useColorMode();
  const theme = useTheme();

  return (
    <AppBar position='sticky' elevation={0} enableColorOnDark >
      {/* <Container maxWidth={false} > */}
      <Toolbar disableGutters >
        <Logo />
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
          {menu.map(item => (
            <Button
              key={item.name}
              component={item.submenu ? null : RouterLink}
              to={item.submenu ? null : item.to}
              onClick={item.submenu ? (e) => handleClick(e, item.submenu) : null}
              startIcon={item.icon || null}
              endIcon={item.submenu ? <ArrowDropDownIcon /> : null}
              sx={{ my: 2, mr: 4, fontSize: '22px', fontWeight: 'bold', lineHeight:1.2 }}
              color="inherit"
              variant={item.name.includes('Crear') ? 'outlined':null}
              disableRipple
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

        <IconButton
          sx={{ ml: 1 }}
          color="inherit"
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {isLogged
          ? <UserMenu />
          : null}
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  )
}
