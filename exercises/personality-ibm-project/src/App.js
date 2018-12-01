import React from 'react'
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3')
const personalityInsights = new PersonalityInsightsV3({
    version: '{version}',
    iam_apikey: '{iam_api_key}',
    url: '{url}'
  });
const App = () =>{
    return(
        <div>

        </div>
    )
}

export default App