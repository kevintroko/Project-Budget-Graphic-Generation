const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
var cors = require('cors');
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test5',
  // port : '3307'
});
const port = process.env.PORT || 5000;

// Initialize the app
const app = express();
var router = express.Router();

app.use(cors());

// person query
app.get('/persons', function (req, res) {
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
//query to get the projects and info that a person is working at=====>gets ALL the states of his work
//give the emai of a person
app.get('/working_projects', function (req, res) {
    connection.query('select * from projects_a_person_is_working_on_view where person_code="'+req.query.code+'"', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});
//query to get info for a specific person
//give the emai of a person
app.get('/person_info', function (req, res) {
    connection.query('select * from person_view where email="'+req.query.code+'"', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});
//query to get the projects a specific user is working on====>ONLY gets the current state of his work
//give the email of a person
app.get('/user_projects', function (req, res) {
    connection.query('select * from working_projects_of_a_user_view where person_code="'+req.query.code+'"', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});
//query to get some project's information
//give the code of a project
app.get('/project_info', function (req, res) {
    connection.query('select * from project_current_participants_view where project_code="'+req.query.code+'"', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});
//query to get the projects that a user owns
//give the email of a person
app.get('/project_ownership', function (req, res) {
    connection.query('select * from project_view where owner="'+req.query.code+'"', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});

//query to get the projects and info that a person is working at=====>gets ALL the states of his work
//give the emai of a person
app.get('/working_projects', function (req, res) {
    connection.query('select * from projects_a_person_is_working_on_view where person_code="'+req.query.code+'"', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});

//query to get info for a specific person
//give the emai of a person
app.get('/person_info', function (req, res) {
    connection.query('select * from person_view where person_code="'+req.query.code+'"', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});


//query to get the projects a specific user is working on====>ONLY gets the current state of his work
//give the email of a person
app.get('/user_projects', function (req, res) {
    connection.query('select * from working_projects_of_a_user_view where person_code="'+req.query.code+'"', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});

//query to get some project's information
//give the code of a project
app.get('/project_info', function (req, res) {
    connection.query('select * from project_current_participants_view where project_code="'+req.query.code+'"', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});



//query to get the projects that a user owns
//give the email of a person
app.get('/project_ownership', function (req, res) {
    connection.query('select * from project_view where owner="'+req.query.code+'"', function (error, results, fields) {
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
 console.log('Go to http://localhost:5000/working_projects to see working_projects');
});
