const { Shapes, Rectangle, Square, Circle, Triangle } = require('./shapes');

describe('Shapes', () => {
  it('should render the shape correctly', () => {
    const shape = new Rectangle();
    shape.setColor('purple');
    expect(shape.renderShape()).toEqual('<rect width="300px" height="200px" fill="purple" x="50%" y="50%" transform="translate(-150, -100)"></rect>');
  });
});

describe('Shapes', () => {
  it('should render the shape correctly', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.renderShape()).toEqual('<rect width="200px" height="200px" fill="green" x="50%" y="50%" transform="translate(-100, -100)"></rect>');
  });
});

describe('Shapes', () => {
  it('should render the shape correctly', () => {
    const shape = new Circle();
    shape.setColor('yellow');
    expect(shape.renderShape()).toEqual('<circle r="200px" fill="yellow" cx="50%" cy="50%"></circle>');
  });
} );

describe('Shapes', () => {
  it('should render the shape correctly', () => {
    const shape = new Triangle();
    shape.setColor('Blue');
    expect(shape.renderShape()).toEqual(`<polygon points="200,0 400,400 0,400" fill="Blue" transform="translate(450, 200)"></polygon>`);
  });
} );

