// @ts-check

// eslint-disable-next-line no-unused-vars
const log = console.log.bind(console);

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
}

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
}

class ProgramWindow {
  screenSize = new Size(800, 600);
  size = new Size();
  position = new Position();

  /**
   * @param {number} width
   * @returns {number}
   */
  #width(width) {
    if (width < 1)
      return 1;

    const remainingWidth = this.screenSize.width - this.position.x;

    return Math.min(remainingWidth, width);
  }

  /**
   * @param {number} height
   * @returns {number}
   */
  #height(height) {
    if (height < 1)
      return 1;

    const remainingHeight = this.screenSize.height - this.position.y;

    return Math.min(remainingHeight, height);
  }

  /**
   * @param {Size} newSize
   */
  resize(newSize) {
    const width = this.#width(newSize.width);
    const height = this.#height(newSize.height);

    this.size.resize(width, height);
  }

  /**
   * @param {number} newX
   */
  #x(newX) {
    if (newX < 0)
      return 0;

    const newWinXEnd = this.position.x + this.size.width + newX;

    if (newWinXEnd > this.screenSize.width)
      return newX - (newWinXEnd - this.screenSize.width);

    return newX;
  }

  /**
   * @param {number} newY
   */
  #y(newY) {
    if (newY < 0)
      return 0;

    const newWinYEnd = this.position.y + this.size.height + newY;

    if (newWinYEnd > this.screenSize.height)
      return newY - (newWinYEnd - this.screenSize.height);

    return newY;
  }

  /**
   * @param {Position} newPosition
   */
  move(newPosition) {
    const newX = this.#x(newPosition.x);
    const newY = this.#y(newPosition.y);

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
