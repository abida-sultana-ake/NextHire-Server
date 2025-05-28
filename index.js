const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('NextHire!')
})

app.listen(port, () => {
  console.log(`Carrer Code is cooking ${port}`)
})

app.listen(port, () => {
    console.log(`Carrer Code server is on port ${port}`)
})