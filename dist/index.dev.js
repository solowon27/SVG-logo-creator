"use strict";

var inquirer = require('inquirer');

var fs = require('fs');

var Shapes = require('./lib/shapes');

var questions = [{
  type: 'list',
  name: 'name',
  message: 'Select a shape:',
  choices: ['square', 'triangle', 'rectangle', 'circle']
}, {
  type: 'input',
  name: 'color',
  message: 'Enter desired color:'
}, {
  type: 'input',
  name: 'width',
  message: 'Enter width:'
}, {
  type: 'input',
  name: 'height',
  message: 'Enter height:'
}, {
  type: 'input',
  name: 'text',
  message: 'Enter text for the shape:'
}];
inquirer.prompt(questions).then(function (answers) {
  var name = answers.name,
      color = answers.color,
      width = answers.width,
      height = answers.height,
      text = answers.text;
  var shape = new Shapes(name, color, width, height, text);
  console.log(shape);
  var svgContent = shape.toSVG();
  fs.writeFile('shape.svg', svgContent, function (err) {
    if (err) throw err;
    console.log('your desired Shape created successfully!');
  });
});