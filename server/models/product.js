/**
 * Created by peachteaboba on 2/15/16.
 */

// This is the product.js file located at /server/models/product.js

// :::::::::::::   MODEL   :::::::::::::::

// We want to create a file that has the schema for our users and
// creates a model that we can then call upon in our controller


var mongoose = require('mongoose');



// create our OrdersSchema
var ProductsSchema = new mongoose.Schema({
    name: String,
    img_url: String,
    description: String,
    initial_quantity: Number,
    created_at: {type: Date, default: Date.now}
});

mongoose.model('Products', ProductsSchema); // We are setting this Schema in our Models as 'Products'
