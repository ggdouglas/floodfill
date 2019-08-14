function Grid(size) {
  this.size = size;
  this.grid = generateGrid(size);
}

Grid.prototype.set = function(x, y) {
  if (this.inBounds(x, y)) {
    console.log('mark!')
    this.grid[y][x] = 1;
  }
}

Grid.prototype.unset = function(x, y) {
  if (this.inBounds(x, y)) {
    this.grid[y][x] = 0;
  }
}

Grid.prototype.inBounds = function(x, y) {
  const inBoundsX = x >= 0 && x < this.size;
  const inBoundsY = y >= 0 && y < this.size;
  return inBoundsX && inBoundsY;
}

Grid.prototype.print = function() {
  let str = '';
  for (let i = 0; i < this.size; i++) {
    str = `${str}${this.grid[i]}\n`;
  }
  console.log(str);
}

function generateGrid(n) {
  return [...Array(n)].map(() => generateRow(n));
}

function generateRow(n) {
  return [...Array(n).fill(0)];
}

module.exports = Grid;
