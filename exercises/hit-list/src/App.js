import React from 'react'
import HitList from './HitList'
import Banner from './Banner'


class App extends React.Component {

    render() {
        return (
            <div>
                <Banner />
                <div className="container">
                    <HitList />
                </div>
            </div>
        )
    }
}

export default App