import React from 'react'
import Header from './Header'
import BlogList from './BlogList'
import Footer from './Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee);

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