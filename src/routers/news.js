const express = require('express')
const newsRouter = express.Router()
const NewsAPI = require('newsapi');
 
newsRouter.get('', async(req, res) => {
    try {
        const newsAPI = await NewsAPI.get('https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=8ba575ff8ea247559c875f2665d49268')
    
 
      
        res.render('news', { articles : newsAPI.data.data })  
        response (array)
    } catch (error) {
        if(error.response) {
            console.log(error.response.data)
        } else if(error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
    }
})
 
module.exports = newsRouter