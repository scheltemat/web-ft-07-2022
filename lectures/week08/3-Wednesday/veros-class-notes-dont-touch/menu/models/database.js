//connection to express for postgres

//** make sure that you have created a database!!!!!  */

const pgp = require('pg-promise')();

let connectionString = {
    host: 'localhost', 
    port: 5432, 
    database: 'menus', 
    user: 'postgres', 
    
}

const db = pgp(connectionString)

module.exports = db;
