const ALPHABET_LENGTH = 26;

export function rotate(plain, rotation) {
  const MIN_LOWERCASE = 'a'.charCodeAt(0);
  const MIN_UPPERCASE = 'A'.charCodeAt(0);

  return [...plain].map(char =>
      /[A-Z]/.test(char) ? String.fromCharCode(MIN_UPPERCASE + (char.charCodeAt(0) - MIN_UPPERCASE + rotation) % ALPHABET_LENGTH) :
          /[a-z]/.test(char) ? String.fromCharCode(MIN_LOWERCASE + (char.charCodeAt(0) - MIN_LOWERCASE + rotation) % ALPHABET_LENGTH) : char)
      .join('');
}
