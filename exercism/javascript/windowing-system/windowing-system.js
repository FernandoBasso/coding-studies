// @ts-check

//
// https://fernandobasso.gitlab.io/devnotes/Exercism/JavaScript/Windowing-System-Exercism-Solution-in-JavaScript
//

const max = Math.max.bind(Math);
const min = Math.min.bind(Math);

/**
 * @param {number} height
 * @param {number} width
 */
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

/**
 * @param {number} x
 * @param {number} y
 */
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
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  /**
   * @param {Size} newSize
   */
  resize({ width: requestedWidth, height: requestedHeight }) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = max(1, min(maxWidth, requestedWidth));
    const newHeight = max(1, min(maxHeight, requestedHeight));

    this.size.resize(newWidth, newHeight);
  }

  /**
   * @param {Position} pos
   */
  move({ x: requestedX, y: requestedY }) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = max(0, min(maxX, requestedX));
    const newY = max(0, min(maxY, requestedY));

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
