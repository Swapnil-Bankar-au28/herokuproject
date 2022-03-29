const express = require('express')

const app = express()

const postsData = require('./mock/posts.json')

const PORT = process.env.PORT || 3000


app.get('./', (req, res) => {

    req.send('hellow')


})

app.get('./posts', (req, res) => {
    res.json(postsData.posts)
})

// const PORT = process.new.PORT || 3000
app.listen(3000)