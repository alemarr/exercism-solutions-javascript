export const convert = number => {
  let result = '';
  result += number % 3 == 0 ? 'Pling' : '';
  result += number % 5 == 0 ? 'Plang' : '';
  result += number % 7 == 0 ? 'Plong' : '';

  if (result == '') {
    return number.toString();
  }

  return result;
};
