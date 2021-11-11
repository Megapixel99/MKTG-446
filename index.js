const express = require('express');             // require ExpressJS so we can use it in our project

var app = express();                          // initialize ExpressJS,
                                                    // so Express can be configured further
                                                    // could be a const, let, or var
/*
  app = {
    get: function (param1, param2) {
      ...
    },
    post: function (param1, param2) {
      ...
    },
    listen: function (param1) {
      ...
    },
    ...
  }
*/

let port = 3000;                              // initialize the port which ExpressJS will use
                                                  // could be a const, let, or var

app.get('/', function (requestInfo, response) { // create the '/' route (so we can respond
                                                    // to people requesting data from our server)
  /*
    response = {
      sendFile: function (param1) {
        ...
      },
      json: function (param1) {
        ...
      },
      ...
    }
  */
  response.sendFile(__dirname + "/index.html");  // respond to the request by sending a file
});

app.post('/data', function (requestInfo, response) { // create the '/data' route (so we can respond
                                                        // to people requesting data from our server)
  response.json("recieved");                         // respond to the request by sending "recieved"
});

app.listen(port);                               // tell express to listen to incoming requests on port 3000
