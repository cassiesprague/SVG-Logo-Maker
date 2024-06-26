//Used the following link to help with making this application
// https://www.youtube.com/watch?v=zh9CsKqEhOM
//https://www.google.com/search?sca_esv=c0e14f80e7366f47&sca_upv=1&sxsrf=ACQVn0-rkeJimByVFhc3aBy2_f0aZxTYRQ:1712165948168&q=how+to+make+a+svg+logo+maker&tbm=vid&source=lnms&prmd=visnbmtz&sa=X&ved=2ahUKEwigjIyZy6aFAxXag4kEHTtVDIYQ0pQJegQICxAB&biw=934&bih=565&dpr=1.5#fpstate=ive&vld=cid:7d5aee99,vid:GJYMcLus3v0,st:0
//Below are all the consts necessary for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateLogo = require("./utils/generateLogo");

//Below conducts the svg class which renders the methods for setting shape and text
class Svg{
    constructor(){
        this.textElement = ""
        this.shapeElement = ""
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}


//Below is my array of questions for the user about the shape and colors they would like
const questions = [
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
        type: "list",
        message: "Please select the desired shape for your logo from the choices.",
        name: "shape",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        message: "Please enter the color keyword(red, white, blue) or hexadecimal number(#8152bf) you would like the color of the shape to be.",
        name: "shapeColor",
    },
];

//to do: create function to inialize app
function toWriteFile(fileName, data) {
    var content = generateLogo(data);
    fs.toWriteFile(fileName, content, function(error) {
        if (error) {
            console.log(error);
        }
        console.log("Generated logo.svg");
    })
}

//to do: call the function to initalize
function init() {
    inquirer.createPromptModule(questions).then(function (data){
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

init();