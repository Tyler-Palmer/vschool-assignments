import React from 'react'
import Navbar from './Navbar'
import Info from './Info'
import Store from './Store'
import Footer from './Footer'


const App = () => {
    return (
      <div id="container">
          <Navbar />
          <Info />
          <Store />
          <Footer />
      </div>
    )
}


export default App