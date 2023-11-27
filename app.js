const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

let count = 0;

app.get('/api/buttonclick', (req, res) => {
  count++;
  res.status(200).send({count: count});
});