export const isArmstrongNumber = number => {
  let exponent = number.toString().length;

  const sum = number.toString()
    .split('') 
    .reduce((acc, digit) => {
      acc += digit ** exponent;
      return acc;
    }, 0);

  return sum === number;
};
