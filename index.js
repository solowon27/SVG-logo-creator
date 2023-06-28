//welcome to SVG logo creator application
// i am going to show you the functionality of basic code blocks

const fs = require('fs'); //this a file system which allow us to read and write file
const inquirer = require('inquirer'); //inquirer module allow us to prompt the user for inputs

const { Rectangle, Square, Circle } = require('./lib/shapes'); 

const messages = [ 
    '\nWelcome to SVG logo creator!',
    'Remember:: You may need to install the dependencies to run this App on your local machine , by running \x1b[32m npm install\x1b[0m, \x1b[32m npm i inquirer\x1b[0m, \x1b[32m npm i fs\x1b[0m',  
    'and you can test the application by running \x1b[32m npm test\x1b[0m or \x1b[32m npx jest\x1b[0m \n',
  ];
  
  function instruction() {  //this function is include a message that appeared in the begining when the index.js run 
    let x = 0; //it is just an instruction for a user 
  
    const intervalId = setInterval(function () { 
      if (x < messages.length) {
        console.log('\x1b[36m%s\x1b[0m', messages[x]); 
        x++;
      } else {
        clearInterval(intervalId); 
        init(); //we have this funnction that will begin the main application and it will execute after the instruction() ended
      }
    }, 500);
  }
const questions = [ //this is our question array to prompt the user for input 
    {
      type: 'list',
      name: 'type',
      message: 'Select \x1b[36m a shape\x1b[0m',
      choices: ['rectangle', 'square', 'circle']
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter desired \x1b[36m color:\x1b[0m ',
    },
    {
    type: 'input',
    name: 'text',
    message: 'Enter \x1b[36m text\x1b[0m for logo Name:',
    validate: function (input) {  //validate the input to be exactly three characters
      if (input.trim().length === 3) {
        return true;
      } else { //if not it will return an error message and ask the user to input again
        return 'Please enter exactly three characters.';
      }
    },
    filter: function (input) { //filter the text input to uppercase 
      return input.toUpperCase();
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter desired \x1b[36m text color:\x1b[0m:'
  }
];
  function init() { //this is our function which prompt the user for input and store the answers in the answer variable
  inquirer.prompt(questions).then(answers => { 
    const { type, color, text, textColor} = answers;
  
    let shape; //switch statment will do create the shape based the user input from the shape.js shape renders
    switch (type) { 
      case 'rectangle':
        shape = new Rectangle(type, color, text, textColor);
        break;
      case 'square':
        shape = new Square(type, color, text, textColor);
        break;
      case 'circle':
        shape = new Circle(type, color, text, textColor);
        break;
      default:
        throw new Error(`Invalid shape type: ${type}`);
    }
  
    fs.writeFile('logo.svg', shape.render(), err => {  //fs.writeFile allow us here to write a logo.svg in our directory
      if (err) throw err;
      console.log('logo.svg created!');
    });
  });
}

instruction(); //our app begin here