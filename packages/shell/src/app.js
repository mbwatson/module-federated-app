import React, {Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Container } from '@mui/material'
const Header = React.lazy(() => import('layout/header'))
const Footer = React.lazy(() => import('layout/footer'))

import './index.css'

const App = () => (
  <Fragment>
    <React.Suspense fallback={ <div>Loading...</div> }>
      <Header />
    </React.Suspense>

    <main>
      <Container maxWidth="md">
        <div>Name: shell</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
      </Container>
    </main>

    <React.Suspense fallback={ <div>Loading...</div> }>
      <Footer />
    </React.Suspense>
  </Fragment>
)

ReactDOM.render(<App />, document.getElementById('app'))
