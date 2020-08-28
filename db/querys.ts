require('dotenv').config();
const mysql = require('mysql');
const { Client } = require('pg');

// MySQL 
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect((err: Error) => {
  console.log('now connected to your database')
});

//PostgreSQL
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.PORT,
});

client.connect((err: Error) => {
  if (err) {
    console.log('you\'re not connected to db yet');
  } else {
    console.log('oh wait, you actually connected');
  }
});

module.exports = {}
