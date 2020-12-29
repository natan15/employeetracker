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
                case "View Employee Roles":
                    viewEmployeeRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "End":
                    connection.end();
                    break;
            }
        });
}

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        start()
    })
}


function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        start()
    })
}

function viewEmployeeRole() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        console.table(res);
        start()
    })
}

function addRole() {
    inquirer.prompt({
        name: "whichRole",
        type: "input",
        message: "What is the role of the employee you would like to add?"
    }).then((res) => {
        var query = connection.query("Insert Into roles SET ?", {
            title: res.whichRole
        },
            function (err, res) {
                if (err) throw err;
                start()
            })
    }

    )
}

function addEmployee() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: "What is the first name?",
          name: "firstName",
        },
        {
          type: "input",
          message: "What is the last name?",
          name: "lastName",
        },
        {
          type: "list",
          message: "What is the employee's title?",
          name: "title",
          choices: showroles
        },
        {
          type: "list",
          message: "Who is the employee's manager?",
          name: "manager",
          choices: showemployees,
        }
      ]).then(function (response) {
        // console.log(response)
        addEmployees(response)
      })
  }
  
  function addEmployees(data) {
  
    connection.query("INSERT INTO employee SET ?",
      {
        first_name: data.firstName,
        last_name: data.lastName,
        role_id: data.title,
        manager_id: data.manager
      }, function (error, res) {
        if (error) throw error;
      })
      endOrMenu();
  }
  
  function addDept() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of the new department?",
          name: "name"
        }
      ])
      .then(function (response) {
        // console.log(response);
        addDepartment(response);
      })
  }
  
  function addDepartment(data) {
    connection.query("INSERT INTO department SET ?", { name: data.name },
    function (error, res) {
      // console.log(error, res);
      if (error) throw error;
    });
    endOrMenu();
  }
  
  function addRole() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of the new employee role?",
          name: "title"
        },

        {
          type: "list",
          message: "In which department is the new role?",
          name: "id",
          choices: showdepartments
        }
      ])
      .then(function (response) {
        // console.log(response);
        addEmployeeRole(response);
      })
  }
  
  function addEmployeeRole(data) {
    connection.query("INSERT INTO role SET ?", {
      title: data.title,
      department_id: data.id
    }, function (error, res) {
      // console.log(error, res);
      if (error) throw error;
    });
    endOrMenu();
  }
