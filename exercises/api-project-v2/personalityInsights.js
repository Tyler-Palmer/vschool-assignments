require("dotenv").config()
const readline = require('readline')
const PersonalityInsightsV3 =require('watson-developer-cloud/personality-insights/v3')

const personalityInsights = new PersonalityInsightsV3({
    version_date: `2017-10-13`,
    iam_apikey:`${process.env.REACT_APP_KEY}`,
    url: `https://gateway.watsonplatform.net/personality-insights/api`
})

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

rl.question('Please enter a short paragraph for Watson to analyze...', (text) => {

    let params = {
      content: text,
      content_type: 'text/plain',
      raw_scores: true,
      consumption_preferences: true
    };
    
    personalityInsights.profile(params, function(error, response) {
    if (error)
      console.log('Error:', error)
    else
      console.log(JSON.stringify(response, null, 2))
    }
  )
  
    rl.close()
  })