const express = require('express');

const app = express();
let PORT = 3001;

//Middleware


//Routes
app.get('/', (req, res) => {
    res.send("We are on home")
})
app.get('/posts', (req, res) => {
    res.send("We are on posts")
})


app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`)
})