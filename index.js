var inquirer = require("inquirer");
const axios = require('./node_modules/axios');
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
        {
            type: "input",
            name: "developmentEnvironment",
            message: "Provide a step-by-step description of how to get the development environment running."
        },
        {
            type: "input",
            name: "tableOfContents",
            message: "Write here your table of contents"
        },
        {
            type: "input",
            name: "output",
            message: "Write shortly the expected output of you development"
        },
        {
            type: "input",
            name: "collaborators",
            message: "List your collaborators with links to their GitHub profiles"
        },
        {
            type: "list",
            message: "Choose what license you want to apply to your project?",
            name: "license",
            choices: [
                "Apache License 2.0",
                "ISC License",
                "MIT License",
                "GNU GPLv3",
                "No License, it's not an open source application"
            ]
        },
        {
            type: "input",
            name: "contributorGuide",
            message: "Add a contributor guideline in case you want other developers to contribute to your project"
        }


    ]).then(function (response) {
        console.log(response.userName);
        axios.get(`https://api.github.com/users/${response.userName}`)
            .then(function (res) {
                console.log(res.data);


                // const markdown = `![](${res.data.avatar_url} "My pic")# \n ${response.title}\n${response.description}\n`

                var avatarImg = res.data.avatar_url;
                var emailGit = res.data.email;
                const markdown = `\n ![](${avatarImg} "My pic") 
                \n Email: ${emailGit}
                \n # Title: ${response.title}
                \n ## Description: ${response.description}\n 
                \n ## Development Environment: ${response.developmentEnvironment}\n
                \n ## Table of Contents: ${response.tableOfContents}\n 
                \n ## Expected Output: ${response.output}\n 
                \n ## Collaborators: ${response.collaborators}\n 
                \n ## License: ${response.license}\n 
                \n ## Contributor Guide: ${response.contributorGuide}\n
                 `


                fs.writeFile("README.md", markdown, function (err) {

                    if (err) {
                        return console.log(err);
                    }

                    console.log("Success!");

                });

            })

    });