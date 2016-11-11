/**
 * Created by peachteaboba on 2/15/16.
 */

var express = require('express');  // require express so that we can build an express app
var path = require('path');  // require path so that we can use path stuff like path.join
var app = express();  // instantiate the express app

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));


// this goes in our server.js file so that we actually use the mongoose config file!
require('./server/config/mongoose.js');


// this line requires and runs the code from our routes.js file and passes it app
// so that we can attach our routing rules to our express application!
require('./server/config/routes.js')(app);




app.listen(9000, function() {
    console.log("It's over 9000!!!");
});