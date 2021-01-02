# employeetracker
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business.

Instructions:

In this project, you will build a solution for managing a company's employees using node, inquirer, and mysql.

Design the following database schema containing three tables:

Database Schema

department:

id - INT PRIMARY KEY
name - VARCHAR(30) to hold department name
role:

id - INT PRIMARY KEY
title - VARCHAR(30) to hold role title
salary - DECIMAL to hold role salary
department_id - INT to hold reference to department role belongs to
employee:

id - INT PRIMARY KEY
first_name - VARCHAR(30) to hold employee first name
last_name - VARCHAR(30) to hold employee last name
role_id - INT to hold reference to role employee has
manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

Build a command-line application that at a minimum allows the user to:

Add departments, roles, employees

View departments, roles, employees

Update employee roles



