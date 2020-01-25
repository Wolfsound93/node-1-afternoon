const products = require('../products.json');

const getProducts = (req, res) => {
  const price = req.query;
  if (price) {
    const items = products.filter(val => val.price === +price);
    res.status(200).json(items);
  } else {
    res.status(200).json(products);
  }
};

const getProduct = (req, res) => {
  const id = req.params;
  const item = products.find(val => val.id === +id);
  if (!item) {
    res.status(500).json({ message: 'Item not in list' });
  } else {
    res.status(200).json(item);
  }
};

module.exports = {
  getProducts,
  getProduct
};
