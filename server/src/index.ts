import express from 'express';

const PORT = 9000;

const app = express();

app.get('/', function(req, res) {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
