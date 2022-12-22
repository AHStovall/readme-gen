// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('../Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    '- Project Title',
    '- What was your motivation?',
    '- Why did you build this project?',
    '- What problem does it solve?',
    '- What did you learn?',
    '- Explain your steps to completing your program',
    '- Provide instructions and examples for use',
    '- What type of license would you like to include?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const file = generateMarkdown(data);
    console.log(file)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
          },
          {
            type: 'input',
            name: 'motivation',
            message: questions[1],
          },
          {
            type: 'input',
            name: 'reasoning',
            message: questions[2],
          },
          {
            type: 'input',
            name: 'problem',
            message: questions[3],
          },
          {
            type: 'input',
            name: 'learn',
            message: questions[4],
          },
          {
            type: 'input',
            name: 'steps',
            message: questions[5],
          },
          {
            type: 'input',
            name: 'examples',
            message: questions[6],
          },
          {
            type: 'input',
            name: 'license',
            message: questions[7],
          }  
]).then((data) =>{
    console.log(data);
const filename = `${data.title.toLowerCase().split(' ').join("")}.md`;

    fs.writeFile(filename, generateMarkdown(data), (err) =>
    err ? console.log(err): console.log("Success!")
    );
})
}

// Function call to initialize app
init();
