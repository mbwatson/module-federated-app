import React from 'react'
import { Container } from '@mui/material'
import { useTheme } from 'shell/theme'
import './header.css'
import { useStore } from 'shell/store'

const Header = () => {
  const { count } = useStore()
  const theme = useTheme()

  return (
    <header>
      <Container maxWidth="md">
        Header ( { count } )
      </Container>
    </header>
  )
}

export default Header
