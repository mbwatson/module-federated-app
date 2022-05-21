import React from 'react'
import { Container } from '@mui/material'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="md">
        &copy; { new Date().getFullYear() }
      </Container>
    </footer>
  )
}

export default Footer
