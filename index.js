const fs = require('fs');
const inquirer = require('inquirer');

const { Rectangle, Square, Circle } = require('./lib/shapes');

const questions = [
    {
      type: 'list',
      name: 'type',
      message: 'Select a shape:',
      choices: ['rectangle', 'square', 'circle']
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter desired color:'
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the shape:',
      validate: function (input) {
        if (input.trim().length === 3) {
          return true;
        } else {
          return 'Please enter exactly three characters.';
        }
      }
    }
  ];
  
  inquirer.prompt(questions).then(answers => {
    const { type, color, text } = answers;
  
    let shape;
    switch (type) {
      case 'rectangle':
        shape = new Rectangle(type, color, text);
        break;
      case 'square':
        shape = new Square(type, color, text);
        break;
      case 'circle':
        shape = new Circle(type, color, text);
        break;
      default:
        throw new Error(`Invalid shape type: ${type}`);
    }
  
    fs.writeFile('logo.svg', shape.render(), err => {
      if (err) throw err;
      console.log('logo.svg created!');
    });
  });
  