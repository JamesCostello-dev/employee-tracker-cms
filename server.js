const sql = require('mysql2');
const inq = require('inquirer');

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

const opt = ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role'];

// prompt
const run = async () => {
  const x = await inq.prompt([
    {
      type: 'list',
      message: 'View options and make a selection',
      name: 'option',
      choices: opt
    },
  ]);
  switch (x.option) {
    case 'View all departments':
      getDepartments();
      break;
    case 'View all roles':
      getRoles();
      break;
    case 'View all employees':
      getEmployees();
      break;
    case 'Add a department':
      addDepartment();
      break;
    case 'Add a Role':
      addRole();
      break;
    case 'Add an employee':
      addEmployee();
      break;
    case 'Update employee role':
      updateRole();
  }
  ;
};


const getDepartments = () => {
  connection.query('SELECT * FROM department', function (err, res) {
    if (err) throw err;
    console.table(res);
    run();
  });
};

const getRoles = () => {
  connection.query('SELECT * FROM role', function (err, res) {
    if (err) throw err;
    console.table(res);
    run();
  });
};

const getEmployees = () => {
  connection.query('SELECT * FROM employee', function (err, res) {
    if (err) throw err;
    console.table(res);
    run();
  });
};

// const addDepartment = () => {

// }

// const addRole = () => {

// }

// const addEmployee = () => {

// }

// const updateRole = () => {

// }