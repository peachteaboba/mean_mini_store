/**
 * Created by anndyfeng1 on 2/15/16.
 */

// this is our customers.js file located at /server/controllers/customers.js

// :::::::::::::   CONTROLLER   :::::::::::::::



var mongoose = require('mongoose');  // need to require mongoose to be able to run mongoose.model()

var Customer = mongoose.model('Customers');  // access our model through var Customer



module.exports = (function() {
    return {

        // this will make a call to the model ----------> Get all Customers
        index: function(req, res) {
            Customer.find({}, function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    //console.log(results);  // all the Customers get returned in the 'results' variable


                    res.json(results);
                }
            })
        },



        create: function(req, res) {
            var customer = new Customer({name: req.body.name});
            customer.save(function(err) {
                if (err) {
                    console.log('something went wrong');
                } else {
                    console.log('successfully added a customer!');
                    console.log(customer);
                    res.redirect('/customers');
                }
            });
        },

        delete: function(req, res) {
            Customer.remove({_id: req.params.id}, function(err) {
                if (err) {
                    console.log('something went wrong');
                } else {
                    console.log('successfully deleted a customer!');
                    res.redirect('/customers');
                }
            });
        }














    }
})();













