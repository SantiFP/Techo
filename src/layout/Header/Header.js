import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Divider,
  LinearProgress,
  Link,
  IconButton
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useLoadingContext } from '../../contexts/LoadingContext'
import Menu from '../../components/Menu'

export const Logo = () => {
  return (
    <Link
      component={RouterLink}
      style={{ color: 'white', textDecoration: 'none' }}
      to='/'
    >
      <Typography
        variant='h5'
        component='span'
        sx={{ fontWeight: 900, letterSpacing: 0.5 }}
      >
        TECHO
      </Typography>
    </Link>
  )
}

export const Header = () => {
  const { isLoading } = useLoadingContext()
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = (isOpen) => {
    setMenuOpen(isOpen)
  }

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <IconButton
          color='inherit'
          aria-label='Open menu'
          onClick={() => toggleMenu(true)}
          edge='start'
        >
          <MenuIcon />
        </IconButton>
        <Container>
          <Logo />
        </Container>
      </Toolbar>
      <Divider />
      {isLoading && <LinearProgress color='primary' />}
    </AppBar>
  )
}
