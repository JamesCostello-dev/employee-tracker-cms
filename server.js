const sql = require('mysql2');
const inq = require('inquirer');
const tab = require('console.table');

// connect to db
const connection = sql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'EmployeeTrackerDB'
});

// connect and log
connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  run();
});