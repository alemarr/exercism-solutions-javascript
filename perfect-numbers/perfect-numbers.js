export const classify = number => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  const factors = getFactors(number);
  const sum = sumFactors(factors);

  return getClassification(number, sum);
};

const getClassification = (number, sum) => {
  if (sum == number) {
    return `perfect`;
  }

  if (sum > number) {
    return `abundant`;
  }

  return `deficient`;
}

const getFactors = number => {
  const factors = [];
  for(let i = 1; i < number; i++) {
    if (number % i != 0) {
      continue;
    }
    factors.push(i);
  }

  return factors;
};

const sumFactors = factors => {
  return factors.reduce((sum, factor) => {
    sum += factor;
    return sum;
  }, 0)
};