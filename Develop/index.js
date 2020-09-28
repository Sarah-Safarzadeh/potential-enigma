const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => [
    {
        type: "input",
        name: 'title',
        message: 'What is your projects title?',
    },
    {
        type: "input",
        name: 'description',
        message: 'Describe your project:',
    },
    {
        type: "input",
        name: 'installation',
        message: 'Provide installation instructions:',
    },
    {
        type: "input",
        name: 'usage',
        message: 'Provide information on the usage of your project:',
    },
    {
        type: "input",
        name: 'contributing',
        message: 'Provide information on the contribution guidelines for your project:',
    },
    {
        type: "input",
        name: 'tests',
        message: 'Provide test instructions for your project:',
    },
    {
        type: "input",
        name: 'license',
        message: 'Choose a license for your application:',
        choices: [
            'Academic Free License v3.0',
            'Apache license 2.0',
            'Creative Commons license family',
            'European Union Public License 1.1',
            'Microsoft Public License',
            'MIT',
            'Mozilla Public License 2.0',
            'PostgreSQL License',
        ]
    },
    {
        type: "input",
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: "input",
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: "input",
        name: 'questions',
        message: 'Please provide instuctions on how to reach you with additional questions:',
    },

];

// function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        if (err) throw err;

        console.log("The README.md is now created!")
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(generateMarkdown)
        .then(writeToFile);
}

// function call to initialize program
init();
