const fs = require('fs'); 
const inquirer = require('inquirer'); 

const { Rectangle, Square, Circle } = require('./lib/shapes'); 

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
        init();
      }
    }, 500);
  }
const questions = [ 
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
    validate: function (input) { 
      if (input.trim().length === 3) {
        return true;
      } else {
        return 'Please enter exactly three characters.';
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
  function init() {
  inquirer.prompt(questions).then(answers => { 
    const { type, color, text, textColor} = answers;
  
    let shape;
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
  
    fs.writeFile('logo.svg', shape.render(), err => { 
      if (err) throw err;
      console.log('logo.svg created!');
    });
  });
}

instruction(); 
  