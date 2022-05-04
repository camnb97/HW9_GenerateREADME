// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function to write README file

const generateMarkdown = (data, license) => {
    return `# ${data.title}
# Description
This project aims to ${data.aim} by creating ${data.what}. It was created to ${data.to}. Completing this project taught me ${data.learn} 
        
# Installation
This project can be installed by ${data.install}
# Usage
To use this project, you must have ${data.tools}
${data.usage}
# License
${license}
        `;
    }

// TODO: Create an array of questions for user input

inquirer
    //here are the questions that will need input, whos answers will be added to the html 
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Project Title",
        },
        {
            type: "input",
            name: "aim",
            message: "this project aims to...",
        },
        {
            type: "input",
            name: "what",
            message: "...by creating (a/an)",
        },
        {
            type: "input",
            name: "to",
            message: "...was created to...",
        },
        {
            type: "input",
            name: "learn",
            message: "..this project taught me...",
        },
        {
            type: "input",
            name: "install",
            message: "...can be installed by...",
        },
        {
            type: "input",
            name: "tools",
            message: "to use...you must have...",
        },
        {
            type: "input",
            name: "usage",
            message: "enter steps to use this project",
        },
        {
            type: "list",
            name: "license",
            message: "Which license will you use",
            choices: ["Apache", "Boost", "BSD"],
        },
    ])
    .then((data) => {
        var license;
        switch (data.license) {
            case "Apache":
                license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case "Boost":
                license = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
                break;
              case "BSD":
                license = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
                break;
              default:
                break;
        }
        const mdContent = generateMarkdown(data, license);
        console.log(data.license);
        fs.writeFile("./output/README.md", mdContent, (err) =>
            err ? console.log(err) : console.log("successfully created README.md")
        );
    });


















// TODO: Create a function to initialize app

// function init() {

// }

// Function call to initialize app

// init();












//////// Acceptance Criteria////////
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled:
            //Description
            //Table of Contents
            //Installation
            //Usage
            //License
            //Contributing
            //Tests
            //Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README