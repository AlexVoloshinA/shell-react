const express = require('express');
const router = express.Router();
const validator = require('validator');
// const allowCrossDomain = require('../../server/app')
const _ = require('lodash');
const Product = require('../models/product');

router.get('/', (req,res) => {
    res.send('<h1>It works!</h1>')
});



router.get('/edit/:id', (req,res) => {
    const id = req.params.id;
    // const updatedObject = {

    // };

    // let product = Product.findByIdAndUpdate(id, )
    res.send(id);
});

router.get('/create', (req,res) => {
    
});

router.get('/all',  async (req,res) => {
    let products = await Product.find({});
    res.send(products);
});

router.post('/create', async (req,res) => {
    console.log(req.body);
    
    // const errors = Object.create(null);

    // // TODO make Middleware validators

    // if(validator.isEmpty(req.body.name)){
    //     errors.name = 'This field is required'
    // }

    // if(!validator.isLength(req.body.name, {min: 4, max: 8})){
    //     errors.name = 'The value must be between 4 and 8 characters'
    // }

    // console.log(req.body.color)


    // if(_.isEmpty(errors)){
    //     let product = new Product({
    //         name: req.body.name,
    //         color: req.body.color
    //     });
    
    //     console.log(product.color);

    //     await product.save();
    
    //     res.send(product);
    // }

    // else {
    //     res.status(404).send(errors)
    // }

    res.send('Ok');
 
});

router.delete('/:id', async (req,res) => {
    let id = req.params.id;
    let deletedProduct = await Product.findByIdAndRemove(id);
    res.send(deletedProduct);
});


module.exports = router;