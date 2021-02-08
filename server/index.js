const express = require('express');
const app = express();
const guitars = require('./model.js')

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/guitars', (req, res) => {
   res.send(guitars.map(item => item));
})

app.listen(3000, () => console.log('Express running on port 3000'))