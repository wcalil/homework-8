var inquirer = require("inquirer");
const axios = require('axios');
var fs = require("fs");

inquirer
    .prompt([
        {
          type: "input",
          name: "userName",
          message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Please, write a short description of your project"
        },
        // {
        //     type: "input",
        //     name: "developmentEnvironment",
        //     message: "Provide a step-by-step description of how to get the development environment running."
        // },
        // {
        //     type: "input",
        //     name: "tableOfContents",
        //     message: "Write here your table of contents"
        // },
        // {
        //     type: "input",
        //     name: "output",
        //     message: "Write shortly the expected output of you development"
        // },
        // {
        //     type: "input",
        //     name: "collaborators",
        //     message: "List your collaborators with links to their GitHub profiles"
        // },
        // {
        //     type: "list",
        //     message: "Choose what license you want to apply to your project?",
        //     name: "license",
        //     choices: [
        //         "Apache License 2.0",
        //         "ISC License",
        //         "MIT License",
        //         "GNU GPLv3",
        //         "No License, it's not an open source application"
        //     ]
        // },
        // {
        //     type: "input",
        //     name: "contributorGuide",
        //     message: "Add a contributor guideline inc ase you want other developers to contribute to your project"
        // }



    ]).then(function (response) {
        console.log(response.userName);
        axios.get(`https://api.github.com/users/${response.userName}`)
          .then(function (res) {
            console.log(res.data);


            const markdown = `# ${response.title}\n${response.description}\n \n ![](${res.data.avatar_url} "My pic")`


            fs.writeFile("README.md", markdown , function (err) {

              if (err) {
                return console.log(err);
              }

              console.log("Success!");

            });

          })

    });
