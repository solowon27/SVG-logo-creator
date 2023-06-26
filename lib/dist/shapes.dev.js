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
  function Shapes(type, color, text) {
    _classCallCheck(this, Shapes);

    this.type = type;
    this.color = color;
    this.text = text;
  }

  _createClass(Shapes, [{
    key: "setShape",
    value: function setShape(type) {
      this.type = type;
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.color = color;
    }
  }, {
    key: "render",
    value: function render() {
      return "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\">\n        <g transform=\"translate(".concat(this.getTranslateX(), ", ").concat(this.getTranslateY(), ")\">\n          ").concat(this.renderShape(), "\n          ").concat(this.renderText(), "\n        </g>\n      </svg>\n    ");
    }
  }, {
    key: "getTranslateX",
    value: function getTranslateX() {
      if (this.type === 'square' || this.type === 'rectangle' || this.type === 'circle') {
        return '-50%';
      } else {
        return '0';
      }
    }
  }, {
    key: "getTranslateY",
    value: function getTranslateY() {
      if (this.type === 'circle' || this.type === 'square' || this.type === 'rectangle') {
        return '-50%';
      } else {
        return '0';
      }
    } // the commented out code also works combined with line number 68 - 70
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

  }, {
    key: "renderText",
    value: function renderText() {
      return "<text x=\"50%\" y=\"50%\" text-anchor=\"middle\" fill=\"black\" font-size=\"50px\">".concat(this.text, "</text>");
    }
  }]);

  return Shapes;
}(); // class Rectangle extends Shapes {}
// class Square extends Shapes {}
// class Circle extends Shapes {}


var Rectangle =
/*#__PURE__*/
function (_Shapes) {
  _inherits(Rectangle, _Shapes);

  function Rectangle() {
    _classCallCheck(this, Rectangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).apply(this, arguments));
  }

  _createClass(Rectangle, [{
    key: "renderShape",
    value: function renderShape() {
      return "<rect width=\"300px\" height=\"200px\" fill=\"".concat(this.color, "\" x=\"50%\" y=\"50%\" transform=\"translate(-150, -100)\"></rect>");
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
    key: "renderShape",
    value: function renderShape() {
      return "<rect width=\"200px\" height=\"200px\" fill=\"".concat(this.color, "\" x=\"50%\" y=\"50%\" transform=\"translate(-100, -100)\"></rect>");
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
    key: "renderShape",
    value: function renderShape() {
      return "<circle r=\"200px\" fill=\"".concat(this.color, "\" cx=\"50%\" cy=\"50%\"></circle>");
    }
  }]);

  return Circle;
}(Shapes);

var questions = [{
  type: 'list',
  name: 'type',
  message: 'Select a shape:',
  choices: ['rectangle', 'square', 'circle']
}, {
  type: 'input',
  name: 'color',
  message: 'Enter desired color:'
}, {
  type: 'input',
  name: 'text',
  message: 'Enter text for the shape:',
  validate: function validate(input) {
    if (input.trim().length === 3) {
      return true;
    } else {
      return 'Please enter exactly three characters.';
    }
  }
}];
inquirer.prompt(questions).then(function (answers) {
  var type = answers.type,
      color = answers.color,
      text = answers.text;
  var shape;

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
      throw new Error("Invalid shape type: ".concat(type));
  }

  fs.writeFile('logo.svg', shape.render(), function (err) {
    if (err) throw err;
    console.log('logo.svg created!');
  });
});
module.exports = {
  Rectangle: Rectangle,
  Square: Square,
  Circle: Circle
};