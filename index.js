// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "githubName",
      message: "What is your name?",
      
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
      
    },
    {
      type: "input",
      name: 'title',
      message: "What is the title of your project?",
      
    },
    {
      type: "input",
      name: 'description',
      message: "Tell me about your project?",
      
    },
    {
      type: "list",
        name: "license",
      message: "Which type of licesnse does the project have?",
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to ?",
      default: "npm i",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
        
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about how to contribute to the repo?",
    },
  ];
  



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile(path.join(process.cwd(), fileName), data);   
}

// TODO: Create a function to initialize app
function init() {
    inquirer.propmt (questions).then((inquierResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({...inquierResponses}));
    });
}

// Function call to initialize app
init();
