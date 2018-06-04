
const bcrypt = require('bcrypt');


var config = {
   host: 'localhost',  
   user: 'root', 
   password: '', 
   database: 'test5'
};

 var knex = require('knex')({
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'test5'
			}
    });
	
var DB = require('bookshelf')(knex);


const User= DB.Model.extend({
   tableName: 'professor_view',
   idAttribute: 'email',
   password: 'hashedpassword'
});

module.exports = {
   User: User
};