// @ts-check

const max = Math.max.bind(Math);
const min = Math.min.bind(Math);

function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

/**
 * @param {number} width
 * @param {number} height
 */
Size.prototype.resize = function resize(width, height) {
  this.width = width;
  this.height = height;
};

function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

/**
 * @param {number} x
 * @param {number} y
 */
Position.prototype.move = function move(x, y) {
  this.x = x;
  this.y = y;
};

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * @param {Size} newSize
   */
  resize(newSize) {
    const maxW = this.screenSize.width - this.position.x;
    const maxH = this.screenSize.height - this.position.y;

    let newW = max(1, min(newSize.width, maxW));
    let newH = max(1, min(newSize.height, maxH));

    this.size.resize(newW, newH);
  }

  /**
   * @param {Position} newPos
   */
  move(newPos) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = max(0, min(maxX, newPos.x));
    const newY = max(0, min(maxY, newPos.y));

    this.position.move(newX, newY);
  }
}

/**
 * @param {ProgramWindow} programWindow
 */
function changeWindow(programWindow) {
  const size = new Size(400, 300);
  const position = new Position(100, 150);

  programWindow.resize(size);
  programWindow.move(position);

  return programWindow;
}

export { Size, Position, ProgramWindow, changeWindow };
