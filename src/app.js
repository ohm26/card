const express =require('express')
const app = express()
const NewsAPI = require('newsapi');


const port = process.env.PORT || 3000
 app.set('view engine','hbs')

 app.get('/',(req,res)=>{
     res.render('index',{
         data:[
             {
        cardtitle: 'News',
        image: 'https://cdn.theatlantic.com/thumbor/lA0HjAXT8PAq8jYAddrIkD2lfrA=/1200x785/media/img/photo/2015/03/the-vietnam-war-part-i-early-years/v01_AP6503010453/original.jpg',
        comments:'newsRouter'}
    ]
 })
 })

 app.listen(port, () =>{
     console.log('Server is running')
 })