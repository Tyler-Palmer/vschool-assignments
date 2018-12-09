import React from 'react'
import loadingsvg from '../images/loading.svg'
import './loading-spinner.css'
const LoadingSpinner = () => {
        return(
            <div>
                <svg id="loadingsvg" style ={{backgroundImage: `url(${loadingsvg})`}}></svg>
            </div>
        )
}

export default LoadingSpinner