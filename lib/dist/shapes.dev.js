"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var inquirer = require('inquirer');

var fs = require('fs');

var Shapes =
/*#__PURE__*/
function () {
  function Shapes(name, color, width, height, text) {
    _classCallCheck(this, Shapes);

    this.name = name;
    this.color = color;
    this.width = width;
    this.height = height;
    this.text = text;
  }

  _createClass(Shapes, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.color = color;
    }
  }, {
    key: "render",
    value: function render() {
      return "<".concat(this.name, " width=\"").concat(this.width, "\" height=\"").concat(this.height, "\" color=\"").concat(this.color, "\"></").concat(this.name, ">");
    }
  }, {
    key: "setText",
    value: function setText() {
      return "<text fill=\"".concat(this.color, "\" font-size=\"74\" font-family=\"Arial\" x=\"50%\" y=\"50%\" alignment-baseline=\"middle\" text-anchor=\"middle\">").concat(this.text, "</text>");
    }
  }, {
    key: "toSVG",
    value: function toSVG() {
      return "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(this.width, "\" height=\"").concat(this.height, "\">\n        ").concat(this.render(), "\n        ").concat(this.setText(), "\n      </svg>");
    }
  }]);

  return Shapes;
}();

var Rectangle =
/*#__PURE__*/
function (_Shapes) {
  _inherits(Rectangle, _Shapes);

  function Rectangle() {
    _classCallCheck(this, Rectangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).apply(this, arguments));
  }

  _createClass(Rectangle, [{
    key: "render",
    value: function render() {
      return "<rect width=\"".concat(this.width, "\" height=\"").concat(this.height, "\" fill=\"").concat(this.color, "\"></rect>");
    }
  }]);

  return Rectangle;
}(Shapes);

var Square =
/*#__PURE__*/
function (_Shapes2) {
  _inherits(Square, _Shapes2);

  function Square() {
    _classCallCheck(this, Square);

    return _possibleConstructorReturn(this, _getPrototypeOf(Square).apply(this, arguments));
  }

  _createClass(Square, [{
    key: "render",
    value: function render() {
      return "square width=\"".concat(this.width, "\" height=\"").concat(this.height, "\" fill=\"").concat(this.color, "\"></square>");
    }
  }]);

  return Square;
}(Shapes);

var Circle =
/*#__PURE__*/
function (_Shapes3) {
  _inherits(Circle, _Shapes3);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Circle).apply(this, arguments));
  }

  _createClass(Circle, [{
    key: "render",
    value: function render() {
      return "<circle width=\"".concat(this.width, "\" height=\"").concat(this.height, "\" fill=\"").concat(this.color, "\"></circle>");
    }
  }]);

  return Circle;
}(Shapes);

var Triangle =
/*#__PURE__*/
function (_Shapes4) {
  _inherits(Triangle, _Shapes4);

  function Triangle() {
    _classCallCheck(this, Triangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Triangle).apply(this, arguments));
  }

  _createClass(Triangle, [{
    key: "render",
    value: function render() {
      return "<tri width=\"".concat(this.width, "\" height=\"").concat(this.height, "\" fill=\"").concat(this.color, "\"></tri>");
    }
  }]);

  return Triangle;
}(Shapes);

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
  var shape;

  switch (name) {
    case 'rectangle':
      shape = new Rectangle(name, color, width, height, text);
      break;

    case 'square':
      shape = new Square(name, color, width, height, text);
      break;

    case 'circle':
      shape = new Circle(name, color, width, height, text);
      break;

    case 'triangle':
      shape = new Triangle(name, color, width, height, text);
      break;

    default:
      shape = new Rectangle(name, color, width, height, text);
      break;
  } // console.log(shape.toSVG());


  fs.writeFile('shape.svg', shape.toSVG(), function (err) {
    if (err) throw err;
    console.log('Shape created successfully!');
  });
});