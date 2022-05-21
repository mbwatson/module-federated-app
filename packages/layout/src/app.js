import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Footer from './footer'
import { StoreProvider } from 'shell/store'

import './index.css'

const App = () => (
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
)

ReactDOM.render(<App />, document.getElementById('app'))
