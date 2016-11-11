/**
 * Created by peachteaboba on 2/15/16.
 */

// This is the order.js file located at /server/models/order.js

// :::::::::::::   MODEL   :::::::::::::::

// We want to create a file that has the schema for our users and
// creates a model that we can then call upon in our controller


var mongoose = require('mongoose');



// create our OrdersSchema
var OrdersSchema = new mongoose.Schema({
    customer_name: String,
    product: String,
    quantity: Number,
    created_at: {type: Date, default: Date.now}
});

mongoose.model('Orders', OrdersSchema); // We are setting this Schema in our Models as 'Orders'
