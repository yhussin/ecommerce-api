const router = require('express').Router();
let Product = require('../models/product');

router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price = Number(req.body.price);

    const newProduct = new Product({
        name,
        description,
        imageUrl,
        price,
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/cartid').post((req, res) => {

    Product.find().where('_id').in(req.body.cart).exec((err, records) => {
        console.log("records", records)
        res.status(200).json({
            message: "Success",
            products: records
        })
    });
})

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.name = req.body.name;
            product.description = req.body.description;
            product.imageUrl = req.body.imageUrl;
            product.price = Number(req.body.price);

            product.save()
                .then(() => res.json('Product updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json("Error: " + err))
});


module.exports = router;