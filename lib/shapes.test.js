const { Rectangle, Square, Circle } = require('./shapes');

//here we are testing parent class 'shape and its child classes using 'JEST'
//we are testing renderShape method of each class
//by comparing the expected output with the actual out put

describe('shapes', () => {
  describe('Rectangle', () => {
    test('render correctly', () => {
      const shapes = new Rectangle();
      expect(shapes.renderShape()).toEqual(`<rect width="300px" height="200px" fill="${this.color}" x="50%" y="50%" transform="translate(-150, -100)"></rect>`);
    });
  });
  
  describe('Square', () => {
    test('render correctly', () => {
      const shapes = new Square();
      expect(shapes.renderShape()).toEqual(`<rect width="200px" height="200px" fill="${this.color}" x="50%" y="50%" transform="translate(-100, -100)"></rect>`);
    });
  });
  
  describe('Circle', () => {
    test('render correctly', () => {
      const shapes = new Circle();
      expect(shapes.renderShape()).toEqual(`<circle r="200px" fill="${this.color}" cx="50%" cy="50%"></circle>`);
    });
  });
});
