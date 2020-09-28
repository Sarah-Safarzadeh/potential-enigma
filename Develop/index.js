const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown)



THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

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
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
