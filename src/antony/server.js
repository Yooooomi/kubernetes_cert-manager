const express = require('express')
const logger = require('morgan');
const axios = require('axios')
const fs = require('fs');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const rt = express.Router();

let i = 0
app.post('/add', (req, res) => {
  return res.status(200).send({ nb: ++i })
})

app.post('/sub', (req, res) => {
  return res.status(200).send({ nb: --i })
})

app.get('/', (req, res) => res.status(200).send("Hello world"));

app.use(rt)

app.listen(8080, () => console.log(`Listening on port 8080...`));