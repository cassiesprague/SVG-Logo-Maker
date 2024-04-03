//Used the following link to help with making this application
//https://www.google.com/search?sca_esv=c0e14f80e7366f47&sca_upv=1&sxsrf=ACQVn0-rkeJimByVFhc3aBy2_f0aZxTYRQ:1712165948168&q=how+to+make+a+svg+logo+maker&tbm=vid&source=lnms&prmd=visnbmtz&sa=X&ved=2ahUKEwigjIyZy6aFAxXag4kEHTtVDIYQ0pQJegQICxAB&biw=934&bih=565&dpr=1.5#fpstate=ive&vld=cid:7d5aee99,vid:GJYMcLus3v0,st:0
//Below are all the consts necessary for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");

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
function writeToFile(fileName, data) {
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("SVG Logo Generated!");
    });
}

async function init() {
    var svgString = "";
	var svg_file = "logo.svg";

    const answers = await inquirer.prompt(questions);

    var user_text = "";
	if (answers.text.length > 0 && answers.text.length < 4) {
		user_text = answers.text;
	} else {
		console.log("Please enter 1-3 characters");
        return;
	}
    user_textColor = answers.textColor;
    user_shape = answers.shape;
    user_shapeColor = answers.shapeColor;

    let user_shape;
    if (user_shape_type === "Circle" || user_shape_type === "circle") {
		user_shape = new Circle();
	}
    else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
		user_shape = new Triangle();
	}
	else (user_shape_type === "Square" || user_shape_type === "square")
		user_shape = new Square();
}


//to do: call the function to initalize
init()