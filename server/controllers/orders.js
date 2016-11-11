/**
 * Created by anndyfeng1 on 2/15/16.
 */

// this is our orders.js file located at /server/controllers/orders.js

// :::::::::::::   CONTROLLER   :::::::::::::::



var mongoose = require('mongoose');  // need to require mongoose to be able to run mongoose.model()

var Order = mongoose.model('Orders');  // access our model through var Order



module.exports = (function() {
    return {

        // this will make a call to the model ----------> Get all Customers
        index: function(req, res) {
            Order.find({}, function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    //console.log(results);  // all the Order get returned in the 'results' variable


                    res.json(results);
                }
            })
        },



        create: function(req, res) {
            var order = new Order(
                    {customer_name: req.body.customer_name, product: req.body.product.name, quantity: req.body.quantity});
            order.save(function(err) {
                if (err) {
                    console.log('something went wrong');
                } else {
                    console.log('successfully added a order!');
                    console.log(order);
                    res.redirect('/orders');
                }
            });
        },

        delete: function(req, res) {
            Order.remove({_id: req.params.id}, function(err) {
                if (err) {
                    console.log('something went wrong');
                } else {
                    console.log('successfully deleted a order!');
                    res.redirect('/orders');
                }
            });
        }














    }
})();













