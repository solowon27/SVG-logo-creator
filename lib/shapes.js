const inquirer = require('inquirer');
const fs = require('fs');

class Shapes {
  constructor(type, color, text, textColor) {
    this.type = type;
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }

  setShape(type) {
    this.type = type;
  }

  setColor(color) {
    this.color = color;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  
  render() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <g transform="translate(${this.getTranslateX()}, ${this.getTranslateY()})">
          ${this.renderShape()}
          ${this.renderText()}
        </g>
      </svg>
    `;
  }

  getTranslateX() {
    if (this.type === 'square' || this.type === 'rectangle' || this.type === 'circle') {
      return '-50%';
    } else {
      return '0';
    }
  }

  getTranslateY() {
    if (this.type === 'circle' || this.type === 'square' || this.type === 'rectangle') {
      return '-50%';
    } else {
      return '0';
    }
  }

  // the commented out code also works combined with line number 68 - 70

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
    return `<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="50px">${this.text}</text>`;
  }
}

// class Rectangle extends Shapes {}
// class Square extends Shapes {}
// class Circle extends Shapes {}


class Rectangle extends Shapes {
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


module.exports = {Shapes, Rectangle, Square, Circle };