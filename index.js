//Below are all the consts necessary for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateSvg = require("./utils/generateSvg")

//Below is my array of questions for the user about the shape and colors they would like
inquirer.prompt([
    {
        type: "input",
        message: "Please enter the text you would like displayed inside your logo! Text can be up to 3 letters.",
        name: "text",
    },
    {
        type: "input",
        message: "Please enter the color keyword(red, white, blue) or hexadecimal number(#8152bf) you would like the color of the text to be.",
        name: "textColor",
    },
    {
        type: "input",
        message: "Please select the desired shape for your logo from the choices.",
        name: "shape",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        message: "Please enter the color keyword(red, white, blue) or hexadecimal number(#8152bf) you would like the color of the shape to be.",
        name: "shapeColor",
    },
])

//to do: create a function to make the svg file


//to do: create function to inialize app


//to do: call the function to initalize