/**
 * Created by anndyfeng1 on 2/15/16.
 */

// this is our products.js file located at /server/controllers/products.js

// :::::::::::::   CONTROLLER   :::::::::::::::



var mongoose = require('mongoose');  // need to require mongoose to be able to run mongoose.model()

var Product = mongoose.model('Products');  // access our model through var Order



module.exports = (function() {
    return {

        // this will make a call to the model ----------> Get all Products
        index: function(req, res) {
            Product.find({}, function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    //console.log(results);  // all the Order get returned in the 'results' variable


                    res.json(results);
                }
            })
        },



        create: function(req, res) {
            var product = new Product(
                    {name: req.body.name, img_url: req.body.img_url, description: req.body.description, initial_quantity: req.body.initial_quantity});
            product.save(function(err) {
                if (err) {
                    console.log('something went wrong');
                } else {
                    console.log('successfully added a product!');
                    console.log(product);
                    res.redirect('/products');
                }
            });
        },

        delete: function(req, res) {
            Product.remove({_id: req.params.id}, function(err) {
                if (err) {
                    console.log('something went wrong');
                } else {
                    console.log('successfully deleted a product!');
                    res.redirect('/products');
                }
            });
        },

        buy: function(req, res) {
            Product.findOne({_id: req.params.id}, function(err, doc) {
                if (err) {
                    console.log('something went wrong');
                } else {
                    console.log('successfully bought a product!');
                    doc.initial_quantity = doc.initial_quantity - req.params.num;
                    doc.save();
                    res.redirect('/products');
                }
            });
        }


    }
})();













