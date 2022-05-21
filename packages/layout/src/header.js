import React from 'react'
import { Container } from '@mui/material'
import './header.css'
import { useStore } from 'shell/store'

const Header = () => {
  const { count } = useStore()

  return (
    <header>
      <Container maxWidth="md">
        Header ( { count } )
      </Container>
    </header>
  )
}

export default Header
