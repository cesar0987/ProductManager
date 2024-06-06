const ProdMng = require("../models/prodMng.models.js");

module.exports.createProduct = (req, res) => {
  ProdMng.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.json(err));
};

module.exports.findAllProducts = (req, res) => {
  ProdMng.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.json(err));
};

module.exports.findOneProduct = (req, res) => {
  ProdMng.findOne({ id: req.params.id })
    .then((oneProduct) => res.json(oneProduct))
    .catch((err) => res.json(err));
};

module.exports.updateProduct = (req, res) => {
  ProdMng.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedProduct) => res.json(updatedProduct))
    .catch((err) => res.json(err));
};

module.exports.deleteProduct = (req, res) => {
  ProdMng.deleteOne({ _id: req.params.id })
    .then((deletedProduct) => res.json(deletedProduct))
    .catch((err) => res.json(err));
};
