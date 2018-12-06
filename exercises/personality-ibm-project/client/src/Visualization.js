import React, { Component } from 'react'
import { withResults } from './context/ResultsProvider'
import rd3 from 'react-d3-library'
import d3 from 'd3v3'
import profile from './profile.json'
import PersonalitySunburstChart from 'personality-sunburst-chart/lib/charts/v3-d3v3'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import '../node_modules/react-vis/dist/style.css'
import { Sunburst } from 'react-vis'


class Visualization extends Component {

  render() {
    console.log(profile)
    return (
      <div>
        <Sunburst
          className="sunburst"
          hideRootNode
          colorType="literal"
          data={{ profile }}
          height={500}
          width={500} />
      </div>
    )
  }
}

export default Visualization