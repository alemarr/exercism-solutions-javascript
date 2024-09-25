export const transpose = input => {
  if (input.length === 0) {
    return [];
  }

  const output = [];
  input.forEach((phrase, column) => {
    [...phrase].forEach((character, row) => {
      if (!output[row]) {
        output[row] = '';
      }
      const diff = column - output[row].length;
      output[row] += diff > 0 ? ' '.repeat(diff) + character : character;
    });
  });

  return output;
};
