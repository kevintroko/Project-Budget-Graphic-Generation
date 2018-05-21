const jwt = require('jsonwebtoken');
const User = require('../models/user')
const config = require('../../config');


var mysql = require('mysql');

var connection = mysql.createConnection({
				  host     : 'localhost',
				  user     : 'root',
				  password : '',
				  database: 'test5'
				});


/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }

    const userId = decoded.sub;
	
	connection.query("select * from professor_view where email = '"+userId+"'",function(err,rows){
		console.log("~~~~~~~~~~~FROM AUTHCHECK~~~~~~~~~~~");
			console.log(rows);
			console.log("~~~~~~~~~~~FROM AUTHCHECK~~~~~~~~~~~");
			 if (rows.length) {
                return next();
            } else {
				return res.status(401).end();	
            }	
		});
  });
};