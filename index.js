var inquirer = require("inquirer");

inquirer
    .prompt([
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
            message: "Add a contributor guideline inc ase you want other developers to contribute to your project"
        }



    ]).then(function (response) {

        var title = JSON.stringify(response.title, null, '\t');
        var description = JSON.stringify(response.description, null, '\t');
        var developmentEnvironment = JSON.stringify(response.developmentEnvironment, null, '\t');
        var tableOfContents = JSON.stringify(response.tableOfContents, null, '\t');
        var output = JSON.stringify(response.output, null, '\t');
        var collaborators = JSON.stringify(response.collaborators, null, '\t');
        var license = JSON.stringify(response.license, null, '\t');
        var contributorGuide = JSON.stringify(response.contributorGuide, null, '\t');

        var resultArray = [
            title,
            description,
            developmentEnvironment,
            tableOfContents,
            output,
            collaborators,
            license,
            contributorGuide
        ];

        var fs = require("fs");

        fs.appendFile("log.txt", resultArray + '\n', function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Success!");

        });
    });
