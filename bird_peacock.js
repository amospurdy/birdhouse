/**
 * myapi.js
 * 
 * @version 1.1 - updated for Express 4.x : April 2015
 *
 * 
 * DESCRIPTION:
 * a "HELLO WORLD" server-side application to demonstrate running a node 
 * API Appserver on a Raspberry Pi to access IOs
 * Uses the Express node packages. 
 * 
 * 
 * @throws none
 * @see nodejs.org
 * @see express.org
 * 
 * @author Robert Drummond
 * (C) 2013 PINK PELICAN NZ LTD
 */

function bird_peacock(http,express) {
  var peacock_listening_port = 3000;

  var app_peacock       = express();


  // ------------------------------------------------------------------------
  // configure Express to serve index.html and any other static pages stored 
  // in the home directory
  app_peacock.use(express.static(__dirname));

  // Base URL
  app_peacock.get('/hi', function (req, res) {
    res.status(200).send('You are just showing off :(');
  });
  // localhost:3000/hi

  // Express route for any other unrecognised incoming requests
  app_peacock.get('*', function (req, res) {
    res.status(404).send('Unrecognised API call');
  });
  // localhost:3000/*

  // Express route to handle errors
  app_peacock.use(function (err, req, res, next) {
    if (req.xhr) {
      res.status(500).send('Oops, Something went wrong!');
    } else {
      next(err);
    }
  }); // apt.use()

  // ------------------------------------------------------------------------
  // Start Express App Server
  //
  app_peacock.listen(peacock_listening_port);
  console.log('Peacock is listening on port '+peacock_listening_port);
}


module.exports.bird_peacock = bird_peacock;

