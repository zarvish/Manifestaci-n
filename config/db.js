import mysql from 'mysql2/promise';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const connection = await mysql.createConnection({
    host: DB_HOST || 'localhost',
    user: DB_USER || 'root',
    password: DB_PASSWORD || 'admin',
    database: DB_DATABASE || 'university_app'
});

export default connection;
