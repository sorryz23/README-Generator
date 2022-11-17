// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of this project?",
            name: "title"
        },
        {
            type: "input",
            message: "Why did you build this project?",
            name: "why"
        },
        {
            type: "input",
            message: "What problem does it solve?",
            name: "problem"
        },
        {
            type: "input",
            message: "What did you learn?",
            name: "learn"
        },
        {
            type: "input",
            message: "How can a user install this application?",
            name: "install"
        },
        {
            type: "input",
            message: "Add a screenshot using ![alt text](assets/images/screenshot.png)",
            name: "screenshot"
        },
        {
            type: "input",
            message: "What are the key features of the application?",
            name: "features"
        },
        {
            type: "input",
            message: "Were any third-party assets or tutorials used that require attribution?",
            name: "thirdparty"
        },
        {
            type: "input",
            message: "How can a user test the application?",
            name: "test"
        },
        {
            type: "input",
            message: "Add your github so users can ask questions",
            name: "github"
        },
        {
            type: "input",
            message: "Add your email so users can contact",
            name: "email"
        },
        {
            type: "list",
            message: "Choose a license for the application",
            name: "license",
            choices: ['Unlicense', 'MIT', 'Apache', 'Berkeley Source Distribution (BSD)', 'Mozilla Public License (MPL)', 'Eclipse Public License (EPL)', 'GNU General Public License (GPL)']
        },
        {
            type: "input",
            message: "How can other devolpers contribute?",
            name: "contribute"
        },
    ]).then((data) => {
        console.log(data);
        fs.writeFile('README.md', generateMarkdown(data),
            error => {
                if (error) {
                    console.log('Please input all the data')
                }
                console.log('Your README was generated')
            }
        )
    })