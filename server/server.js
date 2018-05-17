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
var router = express.Router();

// person query
app.get('/persons', function (req, res) {
    //connection.connect();
    connection.query('select * from person_view', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
    //connection.end();
});
//project query
app.get('/projects', function (req, res) {
    connection.query('select * from project_view', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});
//project query
app.get('/projectDetails', function (req, res) {
    connection.query('select * from project_view where code='+'"'+req.query.code+'" LIMIT 1', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});
//professor query
app.get('/professors', function (req, res) {
    connection.query('select * from professor_view', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});
//has query
app.get('/has', function (req, res) {
    connection.query('select * from has_view', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});
//members query
app.get('/members', function (req, res) {
    connection.query('select first_name, middle_name, last_name, workload, hiring_date, deadline from has_view join person_view where person_view.email = has_view.person_code and has_view.project_code='+'"'+req.query.code+'"', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});

// Start the server
app.listen(port, () => {
 console.log('Go to http://localhost:5000/persons to see persons');
 console.log('Go to http://localhost:5000/projects to see projects');
 console.log('Go to http://localhost:5000/professors to see professors');
 console.log('Go to http://localhost:5000/has to see has');
});
