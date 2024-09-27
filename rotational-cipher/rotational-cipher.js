export function rotate(plain, rotation) {
  const MIN_LOWERCASE = 'a'.charCodeAt(0);
  const MIN_UPPERCASE = 'A'.charCodeAt(0);

  return [...plain].map(char =>
      /[A-Z]/.test(char) ? String.fromCharCode(MIN_UPPERCASE + (char.charCodeAt(0) - MIN_UPPERCASE + rotation) % 26) :
          /[a-z]/.test(char) ? String.fromCharCode(MIN_LOWERCASE + (char.charCodeAt(0) - MIN_LOWERCASE + rotation) % 26) : char)
      .join('');
}