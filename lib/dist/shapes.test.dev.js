"use strict";

var _this = void 0;

var _require = require('./shapes'),
    Rectangle = _require.Rectangle,
    Square = _require.Square,
    Circle = _require.Circle;

describe('shapes', function () {
  describe('Rectangle', function () {
    test('render correctly', function () {
      var shapes = new Rectangle();
      expect(shapes.renderShape()).toEqual("<rect width=\"300px\" height=\"200px\" fill=\"".concat(_this.color, "\" x=\"50%\" y=\"50%\" transform=\"translate(-150, -100)\"></rect>"));
    });
  });
  describe('Square', function () {
    test('render correctly', function () {
      var shapes = new Square();
      expect(shapes.renderShape()).toEqual("<rect width=\"200px\" height=\"200px\" fill=\"".concat(_this.color, "\" x=\"50%\" y=\"50%\" transform=\"translate(-100, -100)\"></rect>"));
    });
  });
  describe('Circle', function () {
    test('render correctly', function () {
      var shapes = new Circle();
      expect(shapes.renderShape()).toEqual("<circle r=\"200px\" fill=\"".concat(_this.color, "\" cx=\"50%\" cy=\"50%\"></circle>"));
    });
  });
});