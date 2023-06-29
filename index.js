//hello welcome to the SVG logo creator application 
//i am going to show you the functionality of some code blocks and 
//we will test our application using npx jest or npm test
//finally we run application to create a logo using SVG format
//lets go


const fs = require('fs'); //this is our file system module which allow us to read and write files
const inquirer = require('inquirer'); //inquirer module to prompt the user for input

const { Rectangle, Square, Circle, Triangle} = require('./lib/shapes'); //we requiring the child classes here from our shape.js to create the shape based on the input

const messages = [ 
    '\nWelcome to SVG logo creator!',
    'Remember:: You may need to install the dependencies to run this App on your local machine , by running \x1b[32m npm install\x1b[0m, \x1b[32m npm i inquirer\x1b[0m, \x1b[32m npm i fs\x1b[0m',  
    'and you can test the application by running \x1b[32m npm test\x1b[0m or \x1b[32m npx jest\x1b[0m \n',
  ];
  
  function instruction() {  
    let x = 0;  
  
    const intervalId = setInterval(function () { 
      if (x < messages.length) {
        console.log('\x1b[36m%s\x1b[0m', messages[x]); 
        x++;
      } else {
        clearInterval(intervalId); 
        init(); //we have this function to start the main app after the messages are deliver
      }
    }, 500);
  }//this is our function that loads at first when our application start and it is just a message for a user as an instruction
const questions = [ //this is our question array to prompt the user for input
    {
      type: 'list',
      name: 'type',
      message: 'Select \x1b[36m a shape\x1b[0m',
      choices: ['rectangle', 'square', 'circle', 'triangle']
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter desired \x1b[36m color:\x1b[0m even using hex color code ',
      validate: function (input) {
        const validColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'gray', 'brown', 'pink', 'purple',];
        const validHex = /^#[0-9A-F]{6}$/i; //this is the reqular expression to validate the hex color
        if (validColors.includes(input.toLowerCase()) || validHex.test(input)) {  //check if the input is either valid hex color or valid color name 
          return true;
        } else { 
          return 'Please enter a valid color.';
      }
    }
    },
    {
    type: 'input',
    name: 'text',
    message: 'Enter \x1b[36m text\x1b[0m for logo Name:',
    validate: function (input) {  //this validate if the input is less than 3 character it return an error message and then return to the question again
      if (input.trim().length < 3) {
        return 'Please enter at least three characters.';
      } else { 
        return true;
      }
    },
    filter: function (input) { 
      return input.toUpperCase();
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter desired \x1b[36m text color:\x1b[0m:'
  }
];
  function init() { //this is our initiate application by prompt the user for input and store the answer in the answer variable
  inquirer.prompt(questions).then(answers => { 
    const { type, color, text, textColor} = answers;
  
    let shape; 
    switch (type) { //this switch statment will do create the shape based on the user input
      case 'rectangle':
        shape = new Rectangle(type, color, text, textColor);
        break;
      case 'square':
        shape = new Square(type, color, text, textColor);
        break;
      case 'circle':
        shape = new Circle(type, color, text, textColor);
        break;
        case 'triangle':
        shape = new Triangle(type, color, text, textColor);
        break;
      default:
        throw new Error(`Invalid shape type: ${type}`);
    }
  
    fs.writeFile('./lib/logo.svg', shape.render(), err => {  //fs.writeFile allow us here to write a logo.svg in lib directory
      if (err) throw err;
      console.log('logo.svg created!');
    });
  });
}

instruction(); //our app begin here