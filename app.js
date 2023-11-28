const express = require('express');
const app = express();
const cors = require('cors');
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(registerRoutes);
app.use(loginRoutes);

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