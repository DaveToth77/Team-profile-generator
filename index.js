const inquirer = require('inquirer');
const generateHTML = require('./src/htmlTemplate')

// Employee classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Team Profile Array
const teamProfileArr = [];


const startQuestions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'start',
            message: `
            ==========================
            Team Profile Generator Pro
            ==========================
              Press Enter to continue `
        }, ])
        .then(addManager)
};
// Questions start
// Manager 
const addManager = () => {



    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "What is your Team Manager's name?",
                validate: name => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please enter your Team Manager's name")
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'id',
                message: ({
                    name
                }) => `Input ${name}'s employee ID number`,
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log(`Please enter an employee ID number`)
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'email',
                message: ({
                    name
                }) => `Input ${name}'s email address`,
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                    if (valid) {
                        return true;
                    } else {
                        console.log(`An email address is required. Please enter a valid email address.`)
                        return false;
                    };
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: ({
                    name
                }) => `Input ${name}\'s office number.`,
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        ({
                            name
                        }) => console.log(error + noInfoEntered + `Please enter ${name}\'s office number.`);
                        return false;
                    }
                },
            },
            {
                type: 'list',
                name: 'otherEmployees',
                message: 'Would you like to add more team members?',
                choices: ['Yes', 'No']
            }
        ])
        .then(answers => {
            const {
                name,
                id,
                email,
                officeNumber
            } = answers;
            const manager = new Manager(name, id, email, officeNumber);
            teamProfileArr.push(manager);
            (answers.otherEmployees === 'Yes') ? addOthers(): generateHTML(teamProfileArr);
        })
}
//Add intern and engineer
const addOthers = () => {
    return inquirer.prompt([{
                type: 'list',
                name: 'title',
                message: 'Team member\'s title (select one):',
                choices: ['Engineer', 'Intern'],
            },
            {
                type: 'input',
                name: 'name',
                message: ({
                    title
                }) => `Input ${title}\'s name.`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        ({
                            title
                        }) => console.log(`Please enter the ${title}\'s name.`);
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'id',
                message: ({
                    name
                }) => `Input ${name}\'s employee ID.`,
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        ({
                            name
                        }) => console.log(`Please enter ${name}\'s employee ID.`);
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'email',
                message: ({
                    name
                }) => `Input ${name}\'s email address.`,
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log(`An email address is required. Please enter a valid email address.`)
                        return false;
                    };
                },
            },
            {
                type: 'input',
                name: 'github',
                message: ({
                    name
                }) => `Input ${name}\'s GitHub username.`,
                when: (input) => input.title === 'Engineer',
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        ({
                            name
                        }) => console.log(`Please enter ${name}\'s GitHub username.`);
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'school',
                message: ({
                    name
                }) => `Input ${name}\'s school.`,
                when: (input) => input.title === 'Intern',
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        ({
                            name
                        }) => console.log(`Please enter ${name}\'s school.`);
                        return false;
                    }
                },
            },
            {
                type: 'list',
                name: 'addOthers',
                message: 'Would you like to add more team members?',
                choices: ['Yes', 'No'],
            },
        ])
        //change class depending on response
        .then(answers => {
            if (answers.title === 'Engineer') {
                const {
                    name,
                    id,
                    email,
                    github
                } = answers;
                const engineer = new Engineer(name, id, email, github);
                teamProfileArr.push(engineer);

            } else if (answers.title === 'Intern') {
                const {
                    name,
                    id,
                    email,
                    school
                } = answers;
                const intern = new Intern(name, id, email, school);
                teamProfileArr.push(intern);
            };
            //push to profile array
            (answers.addOthers === 'Yes') ? addOthers(): generateHTML(teamProfileArr);
        })
}




//function to start program
const init = () => startQuestions()

//Initialize program
init();