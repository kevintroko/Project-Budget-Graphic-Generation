const PassportLocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
var LocalStrategy   = require('passport-local').Strategy;
var mysql = require('mysql');

var connection = mysql.createConnection({
				  host     : 'localhost',
				  user     : 'root',
				  password : '',
				  database: 'test5'
				});

 	// =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
	// by default, if there was no name, it would just be called 'local'

    module.exports = new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
		session: false,
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },(req, email, password, done) =>{

		// find a user whose email is the same as the forms email
		// we are checking to see if the user trying to login already exists
        connection.query("select person_view.isprofessor from person_view where email = '"+email+"'",function(err,rows){
			if (err)
                return done(err);
			 if (rows.length===0 ||rows[0].isprofessor===0) {
				 const error = new Error('This email does not belong to a professor or does not exist!');
				 error.name = 'IncorrectCredentialsError';
                return done(error);
            } else {

				// if there is no user with that email
                // create the user
                var newUserMysql = new Object();
				console.log(password);
				newUserMysql.email = email;
				// Whatever verifications and checks you need to perform here
				bcrypt.genSalt(10, function(err, salt) {
					if (err) return done(err);
					bcrypt.hash(password, salt, function(err, hash) {
						if (err) return done(err);
						newUserMysql.password = hash;
						var insertQuery = "INSERT INTO professor ( email, hashedpassword ) values ('" + newUserMysql.email +"','"+ newUserMysql.password +"')";
					console.log(insertQuery);
				connection.query(insertQuery,function(err,rows){
				newUserMysql.id = rows.insertId;
				
				return done(null, newUserMysql);
				});	
						});
				});
			
				
            }	
		});
    });
