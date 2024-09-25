export const findAnagrams = (word, options) => {
    const sorted = word.toLowerCase()
      .split('')
      .sort()
      .join('');

    let output = [];
    options.forEach(w => {
      if (w.toLowerCase() == word.toLowerCase()) {
        return;
      }
      const reversedWord = w.toLowerCase()
        .split('')
        .sort()
        .join('');

      if (reversedWord == sorted) {
        output.push(w);
      }
    });

    return output;
  }
