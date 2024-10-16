// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "What is your name?",
      name: "githubName",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title"
    },
    {
      type: "input",
      message: "Tell me about your project?",
      name: 'description'
    },
    {
      type: "list",
      message: "Which type of licesnse does the project have?",
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: "input",
      message: "What command should be run to ?",
      name: "installation",
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
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about how to contribute to the repo?",
    },
  ];
  
    const html = htmlGenerator(response);
  
    fs.writeFile(`${response.name}.html`, html, err => err ? console.error(err) : console.log('Success!'));



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeToFile(path.join(process.cwd(), fileName), data);   
}

// TODO: Create a function to initialize app
function init() {
    inquiere.propmt (questions).then((inquierResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({...inquierResponses}));
    });
}

// Function call to initialize app
init();
