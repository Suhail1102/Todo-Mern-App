const express = require('express');
const router = express.Router();
const products = require('../Models/Products');

//Inserting(Creating) Data:
router.post("/api/insertproduct", async (req, res) => {
    const { ProductName, ProductPrice, ProductBarcode } = req.body;

    try {
        const pre = await products.findOne({ ProductBarcode: ProductBarcode })

        if (pre) {
            res.status(422).json("Product is already added.")
        }
        else {
            const addProduct = new products({ ProductName, ProductPrice, ProductBarcode })

            await addProduct.save();
            res.status(201).json(addProduct)
          }
    }
    catch (err) {
        console.log(err)
    }
})

//Getting(Reading) Data:
router.get('/api/products', async (req, res) => {
    try {
        const getProducts = await products.find({})
        
        res.status(201).json(getProducts);
    }
    catch (err) {
        console.log(err);
    }
})

//Getting(Reading) individual Data:
router.get('/api/products/:id', async (req, res) => {

    try {
        const getProduct = await products.findById(req.params.id);
        res.status(201).json(getProduct);
    }
    catch (err) {
        console.log(err);
    }
})

//Editing(Updating) Data:
router.put('/api/updateproduct/:id', async (req, res) => {
    const { ProductName, ProductPrice, ProductBarcode } = req.body;

    try {
        const updateProducts = await products.findByIdAndUpdate(req.params.id, { ProductName, ProductPrice, ProductBarcode }, { new: true });
        res.status(201).json(updateProducts);
    }
    catch (err) {
        console.log(err);
    }
})

//Deleting Data:
router.delete('/api/deleteproduct/:id', async (req, res) => {

    try {
        const deleteProduct = await products.findByIdAndDelete(req.params.id);
        res.status(201).json(deleteProduct);
    }
    catch (err) {
        console.log(err);
    }
})


module.exports = router;