/**
 * Created by peachteaboba on 2/15/16.
 */
// First, at the top of your routes.js file you'll have to require the controller
var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
var products = require('./../controllers/products.js');




// This is our routes.js file located in server/config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it app!)


module.exports = function(app) {


    // Customer routes
    app.get('/customers', function(req, res) {    // show all customers
        customers.index(req, res);
    });

    app.post('/addCustomer', function(req, res) {     // add a new customer
        customers.create(req, res);
    });

    app.get('/customer/:id/delete', function(req, res) {    // delete a customer
        customers.delete(req, res);
    });




    // Orders routes
    app.get('/orders', function(req, res) {    // show all orders
        orders.index(req, res);
    });

    app.post('/addOrder', function(req, res) {     // add a new order
        orders.create(req, res);
    });

    app.get('/order/:id/delete', function(req, res) {    // delete a order
        orders.delete(req, res);
    });


    // Products routes
    app.get('/products', function(req, res) {    // show all products
        products.index(req, res);
    });

    app.post('/addProduct', function(req, res) {     // add a new product
        products.create(req, res);
    });

    app.get('/product/:id/delete', function(req, res) {    // delete a product
        products.delete(req, res);
    });

    app.get('/product/:id/:num/buy', function(req, res) {    // buy a product
        products.buy(req, res);
    });

};


