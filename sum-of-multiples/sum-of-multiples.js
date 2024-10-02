export function sum(points, level) {
  const multiples = [];

  for (let i = 1; i < level; i++) {
    for (const point of points) {
      if (isGreaterThanZero(point) && isDivisibleByPoint(i, point)) {
        multiples.push(i);
      }
    }
  }

  return multiples.filter(getUniqueMultiples).reduce((acc, multiple) => {
    acc += multiple;
    return acc;
  }, 0);
}

const isGreaterThanZero = (point) => point > 0;
const isDivisibleByPoint = (n, point) => n % point === 0;
const getUniqueMultiples = (multiple, idx, multiples) => {
  return multiples.indexOf(multiple) === idx;
};
