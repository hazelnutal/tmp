require('dotenv').config();
const mysql = require('mysql2'); 
const migration = require('mysql-migrations');
const path = require('path');

const env = process.env;

const config = {
    host: env.DB_MIGRATION_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    waitForConnections: true,
    queueLimit: 0,
    debug: false,
};

const connection = mysql.createPool(config);

migration.init(connection, path.resolve(__dirname, '..', 'migrations'));