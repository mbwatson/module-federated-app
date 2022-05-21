import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'

import { Button, Container, Typography } from '@mui/material'

import { StoreProvider, useStore } from 'shell/store'
import { ThemeProvider, useTheme } from 'shell/theme'

const Header = React.lazy(() => import('layout/header'))
const Footer = React.lazy(() => import('layout/footer'))

import './index.css'

const App = () => {
  const { count, increment } = useStore()
  const theme = useTheme()
  
  return (
    <Fragment>
      <React.Suspense fallback={ <div>Loading...</div> }>
        <Header />
      </React.Suspense>

      <main>
        <Container maxWidth="md" sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(2),
        }}>
          <Typography paragraph>
            Fugiat nisi laborum excepteur pariatur sunt ullamco ut cupidatat ullamco dolor.
            Ex laborum aute amet nisi duis dolor non veniam nisi sit aliqua consectetur dolore in deserunt labore.
            Consequat incididunt commodo in dolore labore cupidatat anim nostrud labore adipisicing minim consequat mollit sunt officia velit.
          </Typography>
          <Button onClick={ increment } variant="contained" color="secondary">increment</Button>
          <Typography variant="h2" align="center">{ count }</Typography>
        </Container>
      </main>

      <React.Suspense fallback={ <div>Loading...</div> }>
        <Footer />
      </React.Suspense>
    </Fragment>
  )
}

ReactDOM.render(
  <ThemeProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('app')
)
