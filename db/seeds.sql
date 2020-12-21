USE cms;

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;

INSERT INTO roles (title, salary, departments_id) VALUE ('Engineer Manager', 200000, 3);
INSERT INTO roles (title, salary, departments_id) VALUE ('Sr Engineer', 150000, 3);
INSERT INTO roles (title, salary, departments_id) VALUE ('Jr Engineer', 100000, 3);

INSERT INTO roles (title, salary, departments_id) VALUE ('Sales Manager', 300000, 2);
INSERT INTO roles (title, salary, departments_id) VALUE ('Sales Guru', 200000, 2);
INSERT INTO roles (title, salary, departments_id) VALUE ('Sales Intern', 1, 2);

INSERT INTO roles (title, salary, departments_id) VALUE ('CEO', 1000000, 1);
INSERT INTO roles (title, salary, departments_id) VALUE ('CTO', 700000, 1);
INSERT INTO roles (title, salary, departments_id) VALUE ('CFO', 700000, 1);

INSERT INTO employees (first_name, last_name, managers_id, roles_id) VALUE ('John', 'Smith', NULL, 1);
INSERT INTO employees (first_name, last_name, managers_id, roles_id) VALUE ('John', 'Smith', NULL, 1);
INSERT INTO employees (first_name, last_name, managers_id, roles_id) VALUE ('John', 'Smith', NULL, 1);

INSERT INTO employees (first_name, last_name, managers_id, roles_id) VALUE ('Jane', 'Doe', 1, 2);
INSERT INTO employees (first_name, last_name, managers_id, roles_id) VALUE ('Jane', 'Doe', 2, 2);
INSERT INTO employees (first_name, last_name, managers_id, roles_id) VALUE ('Jane', 'Doe', 2, 2);

INSERT INTO employees (first_name, last_name, managers_id, roles_id) VALUE ('Billy', 'Bob', 1, 3);
INSERT INTO employees (first_name, last_name, managers_id, roles_id) VALUE ('Billy', 'Bob', 2, 3);
INSERT INTO employees (first_name, last_name, managers_id, roles_id) VALUE ('Billy', 'Bob', 2, 3);
