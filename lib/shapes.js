// const inquirer = require('inquirer');
// const fs = require('fs');

class Shapes { //this is our parent class
  constructor(type, color, text, textColor) { //and those are the constructor and properties of the parent class
    this.type = type; //
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  setShape(type) { //this is a setter  method for the type property
    this.type = type;
  }

  setColor(color) {  //this color setting / setting color property
    this.color = color;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  
  render() { //this is our function that will render the svg
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <g transform="translate(0,0)">
          ${this.renderShape()} 
          ${this.renderText()}
        </g>
      </svg>
    `; //on this return line we are calling the renderShape and renderText and returning the reult of both those methods 
  }

  // the commented out code also works combined with line number 68 - 70
  //the bellow commented out line of codes has the same functionality with line# 71-87
//u can use thses code blocks by commenting out line# 71 - 87
  
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
  //     case 'triangle':
  //       return `<polygon points="200,0 400,400 0,400" fill="${this.color}" transform="translate(450, 200)"></polygon>`;
  //     default:
  //       throw new Error(`Invalid shape type: ${this.type}`);
  //   }
  // }

  renderText() { //this is our text rendering function
    return `<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="36px">${this.text}</text>`;
  }
}

// class Rectangle extends Shapes {}
// class Square extends Shapes {}
// class Circle extends Shapes {}


class Rectangle extends Shapes { //these are a child classes inherit from our parent class and they have all access the method and property
  //of the parent class
  renderShape() {
    return `<rect width="300px" height="200px" fill="${this.color}" x="50%" y="50%" transform="translate(-150, -100)"></rect>`;
  } //here i use the transform attribute to make centerd the rectangle in the middle of the screen using x and y axis translation
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




module.exports = {Shapes, Rectangle, Square, Circle, Triangle};  //finally we export our parent class and child classes to be used in index.js

//now let's see our test file /code blocks