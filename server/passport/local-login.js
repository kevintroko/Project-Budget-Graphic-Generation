const jwt = require('jsonwebtoken');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../../config');
var LocalStrategy   = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
var mysql = require('mysql');

var connection = mysql.createConnection({
				  host     : 'localhost',
				  user     : 'root',
				  password : '',
				  database: 'test5'
				});
	
	// =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    module.exports = new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
		session: false,
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },(req, email, password, done) =>{ // callback with email and password from our form
		const userData = {
		email: email.trim(),
		password: password.trim()
		};
		
         connection.query("SELECT * FROM `professor_view` WHERE `email` = '" + userData.email + "'",function(err,rows){
         	console.log("~~~~~~~~~~~FROM LOACL_LOGIN~~~~~~~~~~~");
			 console.log(rows);
			 console.log("~~~~~~~~~~~FROM LOACL_LOGIN~~~~~~~~~~~");
			if (err)
                return done(err);
			
			 if (!rows.length) {
				 const error = new Error('Incorrect email');
				 error.name = 'IncorrectCredentialsError';
                return done(error); 
            } else{
			
			
			 bcrypt.compare(userData.password, rows[0].hashedpassword, function(err, res) {
				if (err) return done(err);
				if (res === false) {
					const error = new Error('Incorrect password');
				 error.name = 'IncorrectCredentialsError';
                return done(error); 
				}
				const payload = {
					sub: userData.email
				};

			// create a token string
			const token = jwt.sign(payload, config.jwtSecret);
			const data = {
				email: rows[0].email
			};
			console.log("you are now at local-login.js");
            // all is well, return successful user
            return done(null, token,data);	
			});
			}
			
					
		
		});
		


    });