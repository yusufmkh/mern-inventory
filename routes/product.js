const router = require('express').Router();
let Product = require('../models/product.model');

// Get/read products
router.route('/').get(chechAuthentication, (req, res) => {
  Product.find({ userId: req.user._id })
    .then(products => res.json(products))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// Add product
router.route('/add').post(chechAuthentication, (req, res) => {
  const name = req.body.name;
  const qty = Number(req.body.qty);
  const um = req.body.um;
  const price = Number(req.body.price);
  const weight = Number(req.body.weight);
  const description = req.body.description;
  const userId = req.user._id;

  const newProduct = new Product({
    name,
    qty,
    um,
    price,
    weight,
    description,
    userId
  });

  newProduct.save()
    .then(product => {
      res.json(product)
      console.log(product)
    })
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// Get a product by its ID
router.route('/:id').get(chechAuthentication, (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (product.userId !== req.user._id) {
        return res.status(401).json('User NOT Authorized!')
      } else {
        res.json(product)
      }
    })
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// Update
router.route('/update/:id').post(chechAuthentication, (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.name = req.body.name;
      product.qty = Number(req.body.qty);
      product.um = req.body.um;
      product.price = Number(req.body.price);
      product.weight = Number(req.body.weight);
      product.description = req.body.description;
      product.date = new Date().getDate();
      product.userId = req.user._id

      product.save()
        .then(savedProduct => res.json(savedProduct))
        .catch(error => res.status(400).json(`Error: ${error}`))
    })
    .catch(error => res.status(400).json(`Error: ${error}`))

});

// Delete
router.route('/:id').delete(chechAuthentication, (req, res) => {
  Product.findOneAndDelete({ _id: req.params.id, userId: req.user._id })
    .then(product => res.json(product._id))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

function chechAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json('User NOT Authorized!');
}

module.exports = router;