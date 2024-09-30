const CHAR_MIN = 97;
const CHAR_MAX = 122;
const NAME_FORMAT = 'CCNNN';
const FORMAT_CHAR = 'C';

const nameStore = new Set();

const generateName = () => {
  let name;

  do {
    name = '';
    NAME_FORMAT.split('').forEach(format => {
      name += format === FORMAT_CHAR ? getRandomChar() : getRandomNumber();
    });
  } while(nameStore.has(name));

  nameStore.add(name);

  return name;
}

const getRandomChar = () => {
  const charCode = Math.floor(Math.random() * (CHAR_MAX - CHAR_MIN)) + CHAR_MIN;
  return String.fromCharCode(charCode).toUpperCase();
}

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10);
}

export class Robot { 
  constructor() {
    this._name = generateName();
  }

  get name() {
    return this._name;
  }

  reset() {
    this._name = generateName();
  }
}

Robot.releaseNames = () => { 
  nameStore.clear();
};
