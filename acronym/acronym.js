export const parse = phrase => {
  phrase = phrase.replace(/[,:. _-]/g, ' ');
  
  const acronym = phrase
    .toUpperCase()
    .split(' ')
    .map(word => {
      return word.charAt(0);
    })
    .join('');

  return acronym;
};
