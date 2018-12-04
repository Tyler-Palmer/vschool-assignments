const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
// const bodyParser = require('body-parser')
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3')
const personalityRouter = express.Router()
const PersonalityTextSummaries = require('personality-text-summary')

app.use(morgan('dev'))

app.use(express.json())
app.use('/results', personalityRouter)

personalityRouter.post('/', (req, res) => {
    const personalityInsights = new PersonalityInsightsV3({
        version_date: `2017-10-13`,
        iam_apikey:`${process.env.KEY}`,
        url: `https://gateway.watsonplatform.net/personality-insights/api`,
        
    })
    console.log(req)
    const profileParams = {
        content: req.body.content,
        content_type: 'text/plain',
        raw_scores: true
    }
    personalityInsights.profile(profileParams, function(error, response){
        if(error){
            res.status(500)
            return res.send(error)
        }else {
            res.status(200)
            return res.send(response, null, 2)
        }
    })
})


app.listen(6000, () => {
    console.log("server is running on port 6000")
})

