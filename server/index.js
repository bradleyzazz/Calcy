const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const Controller = require('./controller.js')

app.use(express.static(path.resolve(__dirname, '../build/')));

app.get('/add/:num1/:num2', Controller.add)
app.get('/subtract/:num1/:num2', Controller.subtract)
app.get('/multiply/:num1/:num2', Controller.multiply)
app.get('/divide/:num1/:num2', Controller.divide)

app.get('/loaderio-7210d1ceb4ffb6c7c4cd1b09f153b9da.txt', (req, res) => {
    res.sendFile(`${__dirname}/loaderio-7210d1ceb4ffb6c7c4cd1b09f153b9da.txt`)
});

const server = app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`)
})

module.exports = server;