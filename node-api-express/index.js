const express = require('express');

const app = express();
const porta = 3000;

app.get('/api/:id', (req, res) => {
  const id = req.params.id;
  res.send('Hello World ' + id);
});

app.listen(porta, () => {
  console.log('servidor rodando na porta ' + porta);
});
