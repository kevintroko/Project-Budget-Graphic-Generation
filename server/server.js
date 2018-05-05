const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test5'
  // host     : 'https://app-1525516093.000webhostapp.com/',
  // user     : 'id5636783_admin',
  // password : 'admin',
  // database : 'id5636783_admin'
});
const port = process.env.PORT || 5000;

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/persons', function (req, res) {
    //connection.connect();

    connection.query('select * from person', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    //connection.end();
});

app.get('/projects', function (req, res) {
    //connection.connect();

    connection.query('select * from project', function (error, results, fields) {
      // console.log(results);
      if (error) throw error;
      res.send(results)
    });

    //connection.end();
});

// Start the server
app.listen(port, () => {
 console.log('Go to http://localhost:5000/persons to see persons');
 console.log('Go to http://localhost:5000/projects to see projects');
});