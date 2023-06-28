// const inquirer = require('inquirer');
// const fs = require('fs');

class Shapes { //this is the parent class
  constructor(type, color, text, textColor) { //and these are our constructor and properties of parent class
    this.type = type; //
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  setShape(type) { //this is a setter method for the type property
    this.type = type;
  }

  setColor(color) {  //here we set the color property
    this.color = color;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  
  render() { //this is our function that will render the SVG
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <g transform="translate(0,0)">
          ${this.renderShape()} 
          ${this.renderText()}
        </g>
      </svg>
    `; //on this return line we are calling the renderShape and renderText method and returning the result of both those methods
  }

  // the commented out code also works combined with line number 68 - 70
  // the following line of code will work by commenting out the code block from line# 63 - 79
  // we use the switch statment and it makes more sense to me

  // renderShape() {
  //   switch (this.type) {
  //     case 'rectangle':
  //       return `
  //         <rect width="300px" height="200px" fill="${this.color}" x="50%" y="50%" transform="translate(-150, -100)"></rect>`;
  //     case 'square':
  //       return `
  //         <rect width="200px" height="200px" fill="${this.color}" x="50%" y="50%" transform="translate(-100, -100)"></rect>`;
  //     case 'circle':
  //       return `<circle r="200px" fill="${this.color}" cx="50%" cy="50%"></circle>`;
  //     default:
  //       throw new Error(`Invalid shape type: ${this.type}`);
  //   }
  // }

  renderText() {
    return `<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="36px">${this.text}</text>`;
  }
}

// class Rectangle extends Shapes {}
// class Square extends Shapes {}
// class Circle extends Shapes {}


class Rectangle extends Shapes { //these are our child classes inherit from the parent class and they have access all the method and properties of the parent class
  renderShape() {
    return `<rect width="300px" height="200px" fill="${this.color}" x="50%" y="50%" transform="translate(-150, -100)"></rect>`;
  }
}

class Square extends Shapes {
  renderShape() {
    return `<rect width="200px" height="200px" fill="${this.color}" x="50%" y="50%" transform="translate(-100, -100)"></rect>`;
  } 
}

class Circle extends Shapes {
  renderShape() {
    return `<circle r="200px" fill="${this.color}" cx="50%" cy="50%"></circle>`;
  }
}

class Triangle extends Shapes {
  renderShape() {
    return `<polygon points="200,0 400,400 0,400" fill="${this.color}" transform="translate(450, 200)"></polygon>`;
  }
}




module.exports = {Shapes, Rectangle, Square, Circle, Triangle};  //finaly we export our classes to be used in the index.js file