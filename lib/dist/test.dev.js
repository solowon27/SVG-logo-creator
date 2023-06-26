"use strict";

var _require = require('./shapes'),
    Rectangle = _require.Rectangle,
    Square = _require.Square,
    Circle = _require.Circle,
    Triangle = _require.Triangle;

var inquirer = require('inquirer'); // Mock the user input


jest.mock('inquirer', function () {
  return {
    prompt: jest.fn().mockResolvedValue({
      color: 'red',
      width: 100,
      height: 100,
      name: 'rectangle'
    })
  };
});
describe('shapes', function () {
  describe('Rectangle', function () {
    it('should create a rectangle', function _callee() {
      var answers, color, width, height, name, rectangle;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(inquirer.prompt([]));

            case 2:
              answers = _context.sent;
              color = answers.color, width = answers.width, height = answers.height, name = answers.name;
              rectangle = new Rectangle(width, height, color, name);
              expect(rectangle.render()).toEqual("<rect width=\"".concat(width, "\" height=\"").concat(height, "\" fill=\"").concat(color, "\"></rect>"));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    });
  });
  describe('Square', function () {
    it('should create a square', function _callee2() {
      var answers, color, width, height, name, square;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(inquirer.prompt([]));

            case 2:
              answers = _context2.sent;
              color = answers.color, width = answers.width, height = answers.height, name = answers.name;
              square = new Square(width, height, color, name);
              expect(square.render()).toEqual("<square width=\"".concat(width, "\" height=\"").concat(height, "\" fill=\"").concat(color, "\"></square>"));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
    describe('Circle', function () {
      it('should create a circle', function _callee3() {
        var answers, color, width, height, name, circle;
        return regeneratorRuntime.async(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return regeneratorRuntime.awrap(inquirer.prompt([]));

              case 2:
                answers = _context3.sent;
                color = answers.color, width = answers.width, height = answers.height, name = answers.name;
                circle = new Circle(width, height, color, name);
                expect(circle.render()).toEqual("<circle width=\"".concat(width, "\" height=\"").concat(height, "\" fill=\"").concat(color, "\"></circle>"));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        });
      });
      describe('Triangle', function () {
        it('should create a triangle', function _callee4() {
          var answers, color, width, height, name, triangle;
          return regeneratorRuntime.async(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return regeneratorRuntime.awrap(inquirer.prompt([]));

                case 2:
                  answers = _context4.sent;
                  color = answers.color, width = answers.width, height = answers.height, name = answers.name;
                  triangle = new Triangle(width, height, color, name);
                  expect(triangle.render()).toEqual("<tri width=\"".concat(width, "\" height=\"").concat(height, "\" fill=\"").concat(color, "\"></tri>"));

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          });
        });
      });
    });
  });
});