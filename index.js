const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "49ers21",
    database: "employees_db"
  });
  
  connection.connect(function (err) {
    if (err) throw err;
    start();
  });
 
  function start() {

    inquirer
      .prompt({
        type: "list",
        name: "task",
        message: "Would you like to do?",
        choices: [
          "View Employees",
          "View Departments",
          "View Employee Roles",
          "Add Employee",
          "Update Employee Role",
          "Add Role",
          "End"]
      })
      .then(function ({ task }) {
        switch (task) {
          case "View Employees":
            viewEmployees();
            break;
          case "View Employees by Department":
            viewDepartments();
            break;
          case "Add Employee":
            addEmployee();
            break;
          case "View Employee Roles":
            viewEmployeeRole();
            break;
          case "Update Employee Role":
            updateEmployeeRole();
            break;
          case "Add Role":
            addRole();
            break;
  
          case "End":
            connection.end();
            break;
        }
      });
    }

function viewDepartments(){
    connection.query("SELECT * FROM department", function(err, res){
        if (err) throw err;
        console.table(res);
        start()
    })
}

function viewEmployees(){
    connection.query("SELECT * FROM employee", function(err, res){
        if (err) throw err;
        console.table(res);
        start()
    })
}

function viewEmployeeRole(){
    connection.query("SELECT * FROM roles", function(err, res){
        if (err) throw err;
        console.table(res);
        start()
    })
}

    //function updateEmployeeRole(data) {
        //connection.query(`UPDATE employee SET role_id = ${data.titleID} WHERE id = ${data.empID}`,
        //function (error, res) {
          //if (error) throw error;
        //});
        //endOrMenu();
      //}