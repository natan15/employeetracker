USE employees_db;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 1000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Lead Engineer", 1500, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 1100, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 1250, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ("Legal Team Lead", 2500, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Walsh", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Goodell", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Scott", "Tran", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Julie", "Brown", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Elaine", "Benes", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Josh", "Allen", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Cosmo", "Kramer", 1, 2);
