//this file extendes circle as a class that extends shape. it renders the sixe, position, and color based on its properites
const Shape = require("./Shape.js");

class Circle extends Shape {
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
    }
};

module.exports = {Circle}