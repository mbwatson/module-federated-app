import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Footer from './footer'

import './index.css'

const App = () => (
  <div className="container">

    <hr />

    <h2>Header</h2>
    <Header />

    <hr />

    <h2>Footer</h2>
    <Footer />

    <hr />

  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
