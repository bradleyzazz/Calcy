const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
// const bodyParser = require('body-parser');
const Controller = require('./controller.js')

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../build/')));

app.get('/add/:num1/:num2', Controller.add)
app.get('/subtract/:num1/:num2', Controller.subtract)
app.get('/multiply/:num1/:num2', Controller.multiply)
app.get('/divide/:num1/:num2', Controller.divide)

app.get('/loaderio-23687832732e68b3d73f43b79f05b364.txt', (req, res) => {
    res.sendFile(`${__dirname}/loaderio-23687832732e68b3d73f43b79f05b364.txt`)
});

app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`)
})