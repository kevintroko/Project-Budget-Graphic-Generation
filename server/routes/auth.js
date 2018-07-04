const express = require('express');
const validator = require('validator');
const passport = require('passport');

const router = new express.Router();

function validateNewProjectPage(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || !payload.project_start instanceof Date || !payload.project_deadline instanceof Date) {
    isFormValid = false;
    errors.name = 'Either start date or deadline are not Date objects.';
  }
  if (!payload || payload.project_start instanceof Date >payload.project_deadline) {
    isFormValid = false;
    errors.name = 'Deadline cannot be prior to the start of the project.';
  }
  if (!payload || typeof payload.project_desc !== 'string' || payload.project_desc.trim().length === 0) {
    isFormValid = false;
    errors.description = 'Please provide a description.';
  }
  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }
  if (!payload ||  parseInt(payload.project_budget,10) <0) {
    isFormValid = false;
    errors.budget = 'The project cannot begin with negative budget.';
  }
  if (!payload ||  typeof payload.project_code !== 'string' || payload.project_code.trim().length === 0) {
    isFormValid = false;
    errors.code = 'The project needs a proper code.';
  }
  let d=JSON.parse(payload.values);
  d.map(p=> {
    if (!p || typeof p.email !== 'string' || !validator.isEmail(p.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address for a PARICIPANT.';
  }

  if (!p || parseInt(p.workload,10) <0 || parseInt(p.workload,10) >100) {
    isFormValid = false;
    errors.workload = 'workload out of range for a Participant!';
  }
    });

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}
function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

var mysql = require('mysql');

var connection = mysql.createConnection({
          host     : 'localhost',
          user     : 'root',
          password : '',
          database: 'test5'
        });

function yyyymmdd(d) {
  var date=new Date(d);
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [date.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('-');
};

router.post('/newproject', (req, res, next) => {
  console.log("------------------WORKS------------------");
  console.log("Name");
    console.log(req.body.name);
    console.log("Owner");
    console.log(req.body.email);
    console.log("Code");
    console.log(req.body.project_code);
    console.log("Description");
    console.log(req.body.project_desc);
    console.log("Budget");
    console.log(req.body.project_budget);
    console.log("Start");
    console.log(yyyymmdd(req.body.project_start));
    console.log("End");
    console.log(yyyymmdd(req.body.project_deadline));
    console.log("~~~~~~~~~~~~~~~~~~~~WORKS~~~~~~~~~~~~~~~~~~~");

  const validationResult = validateNewProjectPage(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  connection.query("select project_view.code from project_view where code = '"+req.body.project_code+"'",function(err,rows){
    if (err)
      return done(err);
    if (rows.length!=0) {
      validationResult.errors.code='This code belongs to another project!';
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    } else {
      var newProjectMysql = new Object();
      newProjectMysql.name = req.body.name;
      newProjectMysql.owner = req.body.email;
      newProjectMysql.code = req.body.project_code;
      newProjectMysql.budget = req.body.project_budget;
      newProjectMysql.description = req.body.project_desc;
      newProjectMysql.start_date = yyyymmdd(req.body.project_start);
      newProjectMysql.deadline = yyyymmdd(req.body.project_deadline);
      var newParticipantsMysql = new Object();
      newParticipantsMysql.participants=JSON.parse(req.body.values);
      var insertQuery = "INSERT INTO project_view (name, code, owner, budget, description, start_date, deadline) values ('" + newProjectMysql.name +"','"+ newProjectMysql.code +"','"+newProjectMysql.owner +"','"+newProjectMysql.budget +"','"+ newProjectMysql.description+"','"+ newProjectMysql.start_date+"','"+newProjectMysql.deadline+"')";
      console.log(insertQuery);
      connection.query(insertQuery,function(err,rows){
        newProjectMysql.id = rows.insertId;
      });

      newParticipantsMysql.participants.map(p=>{
        console.log("~~~~~~~~~~~~");
        console.log("Email");
        console.log(p.email);
        console.log("Range");
        console.log(p.range);
        console.log("Workload");
        console.log(p.workload);
        console.log("Description");
        console.log(p.description);
        console.log("~~~~~~~~~~~~");
        var from_year=p.range.from.year;
        var from_month=p.range.from.month;
        var to_year=p.range.to.year;
        var to_month=p.range.to.month;
        if (from_month<10){
          var from=new Date(from_year+"-0"+from_month+"-01");
        }else{
          var from=new Date(from_year+"-"+from_month+"-01");
        }
        if (to_month<10){
          var to=new Date(to_year+"-0"+to_month+"-01");
        }else{
          var to=new Date(to_year+"-"+to_month+"-01");
        }

        connection.query("select * from has_view where person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"'",function(err,rows){
          if (err)
            return done(err);
          if (rows.length!=0) {
            rows.map(r=>{
              var old_from=new Date(r.hiring_date);
              var old_to=new Date(r.end_date);
              //overlaping cases with other has rows
              if (old_from.getTime()<from.getTime() && old_to.getTime()>from.getTime() && old_to.getTime()<to.getTime() ){
                //change the old one according to the new one
                //UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
                connection.query("UPDATE has_view SET end_date='"+yyyymmdd(from)+"' where person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"' AND hiring_date='"+yyyymmdd(r.hiring_date)+"' AND end_date='"+yyyymmdd(r.end_date)+"'",function(err,rows){});
                console.log("FIRST");
                console.log("IF old.from < new.from < old.to < new.to THEN OLD=[old.from,new.from] and NEW=[new.from,new.to]");
              }else if (old_from.getTime()<to.getTime() && old_to.getTime()>to.getTime() &&from.getTime()<old_from.getTime()){
                //change the old one according to the new one
                //UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
                connection.query("UPDATE has_view SET hiring_date='"+yyyymmdd(to)+"' where person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"' AND hiring_date='"+yyyymmdd(r.hiring_date)+"' AND end_date='"+yyyymmdd(r.end_date)+"'",function(err,rows){});
                console.log("SECOND");
                console.log("IF new.from < old.from < new.to < old.to THEN OLD=[new.to,old.to] and NEW=[new.from,new.to]");
              }else if(old_from.getTime()<from.getTime() && old_to.getTime()>to.getTime()){
                //split the old one according to the new one and insert the two parts of the old one
                connection.query("UPDATE has_view SET end_date='"+yyyymmdd(from)+"' where person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"' AND hiring_date='"+yyyymmdd(r.hiring_date)+"' AND end_date='"+yyyymmdd(r.end_date)+"'",function(err,rows){});
                connection.query("INSERT INTO has_view (project_code, person_code, end_date, hiring_date, job_description, workload) values ('" + newProjectMysql.code +"','"+ p.email +"','"+yyyymmdd(old_to) +"','"+ yyyymmdd(to) +"','"+ r.job_description+"','"+ r.workload+"')",function(err,rows){});
                console.log("THIRD");
                console.log("IF old.from < new.from < new.to < old.to THEN OLD1=[old.from,new.from] and NEW=[new.from,new.to] and OLD2=[new.to,old.to]"); 
              }else if(old_from.getTime()>from.getTime() && old_to.getTime()<to.getTime()){
                //replace the old one with the new one
               connection.query("DELETE FROM has_view WHERE person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"' AND hiring_date='"+yyyymmdd(r.hiring_date)+"' AND end_date='"+yyyymmdd(r.end_date)+"'",function(err,rows){});
                 console.log("FOURTH");
                console.log("IF new.from < old.from < old.to < new.to THEN NEW=[new.from,new.to] (DELETE OLD)"); 
              }
            })
          }
        });

        var insertQuery = "INSERT INTO has_view (project_code, person_code, end_date, hiring_date, job_description, workload) values ('" + newProjectMysql.code +"','"+ p.email +"','"+yyyymmdd(to) +"','"+ yyyymmdd(from) +"','"+ p.description+"','"+ p.workload+"')";
        console.log(insertQuery);
        console.log("Before execution!");
        connection.query(insertQuery,function(err,rows){
            newParticipantsMysql.id = rows.insertId;
          
        });
      }) 
       return res.status(200).json({
              success: true,
              message: 'You have successfully created a new project with participants!'
            });
     }
   });
  });


router.post('/updateproject', (req, res, next) => {

  const validationResult = validateNewProjectPage(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  connection.query("select project_view.code from project_view where code = '"+req.body.project_code+"'",function(err,rows){
    if (err)
      return done(err);
    if (rows.length!=0) {
      var newProjectMysql = new Object();
      newProjectMysql.name = req.body.name;
      newProjectMysql.owner = req.body.email;
      newProjectMysql.code = req.body.project_code;
      newProjectMysql.budget = req.body.project_budget;
      newProjectMysql.description = req.body.project_desc;
      newProjectMysql.start_date = yyyymmdd(req.body.project_start);
      newProjectMysql.deadline = yyyymmdd(req.body.project_deadline);
      var newParticipantsMysql = new Object();
      newParticipantsMysql.participants=JSON.parse(req.body.values);
      connection.query("UPDATE project_view SET deadline='"+newProjectMysql.deadline+"' AND owner = '"+newProjectMysql.owner+"' AND start_date='"+newProjectMysql.start_date+"' AND description='"+newProjectMysql.description+"' AND budget='"+newProjectMysql.budget+"' AND name='"+newProjectMysql.name+"' WHERE code='"+newProjectMysql.code+"'",function(err,rows){});
       newParticipantsMysql.participants.map(p=>{
        var from_year=p.range.from.year;
        var from_month=p.range.from.month;
        var to_year=p.range.to.year;
        var to_month=p.range.to.month;
        if (from_month<10){
          var from=new Date(from_year+"-0"+from_month+"-01");
        }else{
          var from=new Date(from_year+"-"+from_month+"-01");
        }
        if (to_month<10){
          var to=new Date(to_year+"-0"+to_month+"-01");
        }else{
          var to=new Date(to_year+"-"+to_month+"-01");
        }
      connection.query("select * from has_view where person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"' AND hiring_date='"+yyyymmdd(from)+"'",function(err,rows){
          if (err)
            return done(err);
          if (rows.length==0) {
            var insertQuery = "INSERT INTO has_view (project_code, person_code, end_date, hiring_date, job_description, workload) values ('" + newProjectMysql.code +"','"+ p.email +"','"+yyyymmdd(to) +"','"+ yyyymmdd(from) +"','"+ p.description+"','"+ p.workload+"')";
            console.log(insertQuery);
            connection.query(insertQuery,function(err,rows){
                newParticipantsMysql.id = rows.insertId;
            });
          }else{
             connection.query("UPDATE has_view SET job_description='"+p.job_description+"' AND workload='"+p.workload+"' AND end_date='"+yyyymmdd(to)+"' WHERE hiring_date='"+yyyymmdd(from)+"' AND  person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"'",function(err,rows){});
          }
        });
      }) 
    } else {
                      var newProjectMysql = new Object();
                      newProjectMysql.name = req.body.name;
                      newProjectMysql.owner = req.body.email;
                      newProjectMysql.code = req.body.project_code;
                      newProjectMysql.budget = req.body.project_budget;
                      newProjectMysql.description = req.body.project_desc;
                      newProjectMysql.start_date = yyyymmdd(req.body.project_start);
                      newProjectMysql.deadline = yyyymmdd(req.body.project_deadline);
                      var newParticipantsMysql = new Object();
                      newParticipantsMysql.participants=JSON.parse(req.body.values);
                      var insertQuery = "INSERT INTO project_view (name, code, owner, budget, description, start_date, deadline) values ('" + newProjectMysql.name +"','"+ newProjectMysql.code +"','"+newProjectMysql.owner +"','"+newProjectMysql.budget +"','"+ newProjectMysql.description+"','"+ newProjectMysql.start_date+"','"+newProjectMysql.deadline+"')";
                      console.log(insertQuery);
                      connection.query(insertQuery,function(err,rows){
                        newProjectMysql.id = rows.insertId;
                      });

                      newParticipantsMysql.participants.map(p=>{
                        console.log("~~~~~~~~~~~~");
                        console.log("Email");
                        console.log(p.email);
                        console.log("Range");
                        console.log(p.range);
                        console.log("Workload");
                        console.log(p.workload);
                        console.log("Description");
                        console.log(p.description);
                        console.log("~~~~~~~~~~~~");
                        var from_year=p.range.from.year;
                        var from_month=p.range.from.month;
                        var to_year=p.range.to.year;
                        var to_month=p.range.to.month;
                        if (from_month<10){
                          var from=new Date(from_year+"-0"+from_month+"-01");
                        }else{
                          var from=new Date(from_year+"-"+from_month+"-01");
                        }
                        if (to_month<10){
                          var to=new Date(to_year+"-0"+to_month+"-01");
                        }else{
                          var to=new Date(to_year+"-"+to_month+"-01");
                        }

                        connection.query("select * from has_view where person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"'",function(err,rows){
                          if (err)
                            return done(err);
                          if (rows.length!=0) {
                            rows.map(r=>{
                              var old_from=new Date(r.hiring_date);
                              var old_to=new Date(r.end_date);
                              //overlaping cases with other has rows
                              if (old_from.getTime()<from.getTime() && old_to.getTime()>from.getTime() && old_to.getTime()<to.getTime() ){
                                //change the old one according to the new one
                                //UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
                                connection.query("UPDATE has_view SET end_date='"+yyyymmdd(from)+"' where person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"' AND hiring_date='"+yyyymmdd(r.hiring_date)+"' AND end_date='"+yyyymmdd(r.end_date)+"'",function(err,rows){});
                                console.log("FIRST");
                                console.log("IF old.from < new.from < old.to < new.to THEN OLD=[old.from,new.from] and NEW=[new.from,new.to]");
                              }else if (old_from.getTime()<to.getTime() && old_to.getTime()>to.getTime() &&from.getTime()<old_from.getTime()){
                                //change the old one according to the new one
                                //UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
                                connection.query("UPDATE has_view SET hiring_date='"+yyyymmdd(to)+"' where person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"' AND hiring_date='"+yyyymmdd(r.hiring_date)+"' AND end_date='"+yyyymmdd(r.end_date)+"'",function(err,rows){});
                                console.log("SECOND");
                                console.log("IF new.from < old.from < new.to < old.to THEN OLD=[new.to,old.to] and NEW=[new.from,new.to]");
                              }else if(old_from.getTime()<from.getTime() && old_to.getTime()>to.getTime()){
                                //split the old one according to the new one and insert the two parts of the old one
                                connection.query("UPDATE has_view SET end_date='"+yyyymmdd(from)+"' where person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"' AND hiring_date='"+yyyymmdd(r.hiring_date)+"' AND end_date='"+yyyymmdd(r.end_date)+"'",function(err,rows){});
                                connection.query("INSERT INTO has_view (project_code, person_code, end_date, hiring_date, job_description, workload) values ('" + newProjectMysql.code +"','"+ p.email +"','"+yyyymmdd(old_to) +"','"+ yyyymmdd(to) +"','"+ r.job_description+"','"+ r.workload+"')",function(err,rows){});
                                console.log("THIRD");
                                console.log("IF old.from < new.from < new.to < old.to THEN OLD1=[old.from,new.from] and NEW=[new.from,new.to] and OLD2=[new.to,old.to]"); 
                              }else if(old_from.getTime()>from.getTime() && old_to.getTime()<to.getTime()){
                                //replace the old one with the new one
                               connection.query("DELETE FROM has_view WHERE person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"' AND hiring_date='"+yyyymmdd(r.hiring_date)+"' AND end_date='"+yyyymmdd(r.end_date)+"'",function(err,rows){});
                                 console.log("FOURTH");
                                console.log("IF new.from < old.from < old.to < new.to THEN NEW=[new.from,new.to] (DELETE OLD)"); 
                              }
                            })
                          }
                        });

                        connection.query("select * from has_view where person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"' AND hiring_date='"+p.hiring_date+"'",function(err,rows){
                          if (err)
                            return done(err);
                          if (rows.length==0) {
                            var insertQuery = "INSERT INTO has_view (project_code, person_code, end_date, hiring_date, job_description, workload) values ('" + newProjectMysql.code +"','"+ p.email +"','"+yyyymmdd(to) +"','"+ yyyymmdd(from) +"','"+ p.description+"','"+ p.workload+"')";
                            console.log(insertQuery);
                            connection.query(insertQuery,function(err,rows){
                                newParticipantsMysql.id = rows.insertId;
                            });
                          }else{
                            connection.query("DELETE FROM has_view WHERE person_code = '"+p.email+"' AND project_code='"+newProjectMysql.code+"' AND hiring_date='"+yyyymmdd(r.hiring_date)+"' AND end_date='"+yyyymmdd(r.end_date)+"'",function(err,rows){});
                            var insertQuery = "INSERT INTO has_view (project_code, person_code, end_date, hiring_date, job_description, workload) values ('" + newProjectMysql.code +"','"+ p.email +"','"+yyyymmdd(to) +"','"+ yyyymmdd(from) +"','"+ p.description+"','"+ p.workload+"')";
                            console.log(insertQuery);
                            connection.query(insertQuery,function(err,rows){
                                newParticipantsMysql.id = rows.insertId;
                            });
                          }
                        });
                      }) 
                       
     }
     return res.status(200).json({
                              success: true,
                              message: 'You have successfully created a new project with participants!'
                            });
   });
  });


router.post('/signup', (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-signup', (err) => {
    if (err) {

      return res.status(400).json({
        success: false,
        message: err.message
      });
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.'
    });
  })(req, res, next);
});

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-login', (err, token, userData) => {
    console.log(userData);
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }
    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    });

  })(req, res, next);
});

module.exports = router;