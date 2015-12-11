// Require mongodb native drivers
var mongobd = require('mongodb');

// Require MonogoClient interface to connect to mongodb server
var MongoClient = mongodb.MonogoClient;

// Connection URL
var url = 'mongodb://localhost:8080/time_tracker_db';

// Connect to the mongo server
MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error: ', error);
  } else {
    // Connection established
    console.log('Connection established to', url);

    // Work with db
    

    // Close Connection
    db.close();
  }
});
