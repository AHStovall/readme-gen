// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  // title - ask for project title
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  // description - ask for description of project
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    name: "description",
  },
  // installation - ask for steps to install project
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
    name: "installation",
  },
  // usage - ask for instructions and examples for app use
  {
    type: "input",
    message: "Provide instructions and examples for use.",
    name: "usage",
  },
  // credits - list collaborators if any
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    name: "credits",
  },
  // license should be in list form, no spaces
  {
    type: "list",
    message: "Which license do you want to include?",
    choices: ["Apache_2.0", "ISC", "MIT"],
    name: "license",
  },
  // features - list features here
  {
    type: "input",
    message: "If your project has a lot of features, list them here.",
    name: "features",
  },
  // contribute - share how to contribute to this app
  {
    type: "input",
    message:
      "If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so here.",
    name: "contribute",
  },
  // tests - provide examples if tests written for this app, how to run them
  {
    type: "input",
    message:
      "If you've written tests for your application, provide examples on how to run them here.",
    name: "tests",
  },
  // include the next two parts in Questions section
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer
  .prompt(questions)
  .then((data) =>{
    console.log(data);
const filename = `${data.title.toLowerCase().split(' ').join("")}.md`;

    fs.writeFile(filename, generateMarkdown(data), (err) =>
    err ? console.log(err): console.log("Success!")
    );
})
};

writeToFile();