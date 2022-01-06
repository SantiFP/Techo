import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Divider,
  LinearProgress,
  Link
} from '@mui/material'
import { useLoadingContext } from '../../contexts/LoadingContext'

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
  return (
    <AppBar position='sticky' elevation={0} enableColorOnDark>
      <Container>
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Logo />
          </Box>
        </Toolbar>
      </Container>
      <Divider />
      {isLoading && <LinearProgress color='primary' />}
    </AppBar>
  )
}
