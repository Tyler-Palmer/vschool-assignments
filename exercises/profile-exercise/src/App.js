import React from 'react'
import Welcome from './Welcome'

const App = () =>{
    return(
        <div id="container">
            <Welcome name="Tyler" email="tylerpalmer7@gmail.com" phone="5135073307" image="http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg"/>
            <Welcome name="Joe" email="joeasdfasdf@gmail.com" phone="3324567324" image="https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-cat-photos-funny-cover.jpg"/>
            <Welcome name="Sally" email="sallygasdasdfg43@gmail.com" phone="6789432012" image="http://static.boredpanda.com/blog/wp-content/uploads/2014/01/funny-cats-sneezing-3.jpg"/>
        </div>
    )
}

export default App;