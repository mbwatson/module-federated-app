import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import { Container, Typography } from '@mui/material'
import { StoreProvider, useStore } from 'shell/store'
const Header = React.lazy(() => import('layout/header'))
const Footer = React.lazy(() => import('layout/footer'))

import './index.css'

const App = () => {
  const { count, increment } = useStore()
  
  return (
    <Fragment>
      <React.Suspense fallback={ <div>Loading...</div> }>
        <Header />
      </React.Suspense>

      <main>
        <Container maxWidth="md">
          <Typography paragraph>
            Fugiat nisi laborum excepteur pariatur sunt ullamco ut cupidatat ullamco dolor.
            Ex laborum aute amet nisi duis dolor non veniam nisi sit aliqua consectetur dolore in deserunt labore.
            Consequat incididunt commodo in dolore labore cupidatat anim nostrud labore adipisicing minim consequat mollit sunt officia velit.
          </Typography>
          <button onClick={ increment }>increment</button>
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
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('app')
)
