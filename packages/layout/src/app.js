import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Footer from './footer'
import { StoreProvider } from 'shell/store'
import { ThemeProvider } from 'shell/theme'

import './index.css'

const App = () => (
  <ThemeProvider>
    <StoreProvider>
      <div className="container">

        <hr />

        <h2>Header</h2>
        <Header />

        <hr />

        <h2>Footer</h2>
        <Footer />

        <hr />

      </div>
    </StoreProvider>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
