// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is a description of the project?",
        name: "description",
    },
    {
        type: "input",
        message: "What is the project objective?",
        name: "objectives",
    },
    {
        type: "input",
        message: "What commands are used to run this project?",
        name: "commandsused",
    },
    {
        type: "input",
        message: "What languages were used in this project?",
        name: "languagesused"
    },
    {
        type: "input",
        message: "What is the project motivation?",
        name: "motivation",
    },
    {
        type: "input",
        message: "Who were the project contributors?",
        name: "contributors"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.error(err) : console.log("It worked!"));
}

// TODO: Create a function to initialize app
function init() {
        inquirer  
            .prompt(questions)
            .then((data) => {
                console.log(data);
                const info = generateMarkdown(data);
                writeToFile("README.md", info)
            })
}


// Function call to initialize app
init();
