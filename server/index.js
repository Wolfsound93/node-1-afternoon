const express = require('express');
const app = express();
const { getProducts, getProduct } = require('./getProducts');

const port = 4040;

app.get('/api/products', getProducts);
app.get('/api/products/:id', getProduct);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
