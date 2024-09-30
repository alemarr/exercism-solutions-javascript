const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_LENGTH = ALPHABET.length;
const INITIAL_CHAR_CODE = 'a'.charCodeAt(0);

const isValidKey = (key) => {
    if (key && (key === '' || !(key.match(/^[a-z]+$/)))) {
      throw new Error('Bad key');
    }
}

const generateRandomKey = () =>  {
  return Array.from({ length: 100 }).reduce((key) => {
    const randomIndex = Math.floor(Math.random() * 26);
    key += ALPHABET[randomIndex];
    return key;
  }, '');
}

export class Cipher {
  constructor(key) {
    isValidKey(key);

    this.key = key || generateRandomKey();
    this.encode = this.transform.bind(this, 1);
    this.decode = this.transform.bind(this, -1);
  }

  // handles rotation
  rotate(letterCode, rotationCode) {
    const newCode = ((letterCode + rotationCode) % 26);
    return String.fromCharCode(newCode + 97);
  }

  transform(direction, text) {
    return text.split('').map((letter, index) => {
      let currentIndex = text.charCodeAt(index);
      let keyIndex = this.key.charCodeAt(index % this.key.length);

      let shift = keyIndex - INITIAL_CHAR_CODE;
      // Check if decoding cipher
      if (direction < 0) {
        shift = ALPHABET_LENGTH - shift;
      }
      return this.rotate(currentIndex - INITIAL_CHAR_CODE, shift);
    }).join('');
  }

  encode(direction, plainText) {
    this.transform(direction, plainText);
  }

  decode(direction, cipher) {
    this.transform(direction, cipher);
  }
}