import React from 'react'
import Header from './Header'
import BlogList from './BlogList'
import Footer from './Footer'

const App = () => {
    return(
        <div id="container">
            <Header />
            <BlogList />
            <hr></hr>
            <Footer />
        </div>
    )
}

export default App