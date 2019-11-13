const express = require('express')
const logger = require('morgan');
const axios = require('axios')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dnsAntony = process.env.ANTONY;

app.post('/add', async (req, res) => {
  try {
    const r = await axios.post(`http://${dnsAntony}/add`)
    return res.status(200).send({ ...r.data, yoyo: 3 });
  } catch(e) {
    console.error(e)
    return res.status(500).send(e)
  }
})

app.post('/sub', async (req, res) => {
  try {
    const r = await axios.post(`http://${dnsAntony}/sub`)
    return res.status(200).send(r.data)
  } catch(e) {
    console.error(e)
    return res.status(500).send(e)
  }
})

app.get('/', (req, res) => {
  return res.status(200).send('Hello world!')
})

app.listen(8080, () => console.log(`Listening on port 8080...`));