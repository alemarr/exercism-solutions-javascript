export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

// Aiming to emulate enums here
const Movement = {
  ADVANCE: "A",
  LEFT: "L",
  RIGHT: "R",
  MOVE_TRUE: 1,
  MOVE_FALSE: 0,
};

const Direction = {
  NORTH: 0,
  EAST: 1,
  SOUTH: 2,
  WEST: 3
};

export class Robot {
  constructor() {
    this._direction = Direction.NORTH;
    this._x = 0;
    this._y = 0;
  }

  get bearing() {
    return Object.entries(Direction)[this._direction][0].toLowerCase();
  }

  get coordinates() {
    return [this._x, this._y];
  }

  place({x, y, direction}) {
    this._x = x;
    this._y = y;
    if (Direction[direction.toUpperCase()] === undefined) {
      throw new InvalidInputError();
    }
    this._direction = Direction[direction.toUpperCase()];
  }

  advance() {
    if (this._direction === Direction.SOUTH || this._direction === Direction.NORTH) {
      this.changePosition(Movement.MOVE_FALSE, Movement.MOVE_TRUE);
    } else {
      this.changePosition(Movement.MOVE_TRUE, Movement.MOVE_FALSE);
    }
    return this;
  }

  changePosition(x, y)
  {
    if (this._direction === Direction.SOUTH) {
      y *= -1;
    }
    if (this._direction === Direction.WEST) {
      x *= -1;
    }
    this._x += x;
    this._y += y;
  }

  turnRight() {
    this.changeDirection(1);

    return this;
  }

  turnLeft() {
    this.changeDirection(-1);
    return this;
  }

  changeDirection(movement)
  {
    this._direction += movement;
    if (this._direction > Direction.WEST) {
      this._direction -= this._direction;
    }
    if (this._direction < Direction.NORTH) {
      this._direction = Direction.WEST;
    }
  }

  evaluate(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      const instruction = instructions[i];
      switch(instruction) {
        case Movement.ADVANCE:
          this.advance();
          break;
        case Movement.LEFT:
          this.turnLeft();
          break;
        case Movement.RIGHT:
          this.turnRight();
          break;
        default:
          throw new InvalidInputError();
        }
    }
    return this;
  }
}
