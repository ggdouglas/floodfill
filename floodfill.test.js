const floodfill = require('./floodfill');
const Grid = require('./grid');

it('test', () => {
  const grid = new Grid(3);

  grid.set(0, 0)

  grid.print();

  floodfill();

});
