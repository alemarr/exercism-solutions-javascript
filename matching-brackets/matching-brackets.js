const REGEX = /\{\}|\[\]|\(\)/g;

export const isPaired = (input) => {
  input = input.replace(/[^[\](){}]/g, '');

  while (REGEX.test(input)) {
    input = input.replace(REGEX, '');
  }

  return !input.length;
};
