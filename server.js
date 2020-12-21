const mysql2 = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// connect to db
const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'cms'
});

// connect and log
connection.connect(err => {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  run();
});

// prompt
const run = async () => {
  await inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'View options and make a selection',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee'],
    filter: async (answer) => {
      if (answer === 'View all departments') {
        await getDepartments();
      } else if (answer === 'View all roles') {
        await getRoles();
      } else if (answer === 'View all employees') {
        await getEmployees();
      } else if (answer === 'Add a department') {
        await addDepartment();
      } else if (answer === 'Add a role') {
        await addRole();
      } else if (answer === 'Add an employee') {
        await addEmployee();
      } else {
        return;
      }
    }
  });
};

// get deps
const getDepartments = async () => {
  connection.query('SELECT * FROM departments', function (err, res) {
    if (err)
      throw err;
    console.table(res);
    run();
  });
};

// get roles
const getRoles = async () => {
  connection.query('SELECT * FROM roles', function (err, res) {
    if (err) throw err;
    console.table(res);
    run();
  });
};

// get employees
const getEmployees = async () => {
  connection.query('SELECT * FROM employees', function (err, res) {
    if (err)
      throw err;
    console.table(res);
    run();
  });
};

// add dep
const addDepartment = async () => {
  const res = await inquirer.prompt({
    name: 'departments',
    type: 'input',
    message: 'Please enter a new department name'
  });
  connection.query('INSERT INTO departments SET ?',
    { department_name: res.departments },
    function (err, res_1) {
      if (err)
        throw err;
      console.log(res_1.affectedRows);
      run();
    });
};

// add role
const addRole = async () => {
  connection.query('SELECT role.title AS title, role.salary AS salary FROM roles', async function () {
    const res = await inquirer.prompt([{
      name: 'title',
      type: 'input',
      message: 'Please enter a title for this role.'
    },
    {
      name: 'salary',
      type: 'input',
      message: 'Please enter a salary for this role.'
    }]);
    connection.query('INSERT INTO roles SET ?',
      { title: res.title, salary: res.salary },
      function (err, res_1) {
        if (err)
          throw err;
        console.table(res_1.affectedRows);
        run();
      });
  });
};

// add emp
const addEmployee = async () => {
  connection.query('SELECT employee.first_name AS first, employee.last_name AS last FROM employees', async function () {
    const res = await inquirer.prompt([{
      name: 'first',
      type: 'input',
      message: 'Please enter employees first name'
    },
    {
      name: 'last',
      type: 'input',
      message: 'Please enter employees last name'
    }]);
    connection.query('INSERT INTO employees SET ?',
      { first_name: res.first, last_name: res.last },
      function (err, res_1) {
        if (err)
          throw err;
        console.table(res_1);
        run();
      });
  });
};