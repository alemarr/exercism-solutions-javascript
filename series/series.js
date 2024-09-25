export class Series {
  constructor(numbers) {
    this._numbers = numbers;
  }

  get digits() {
    return this._numbers.split('').map(strNumber => {
      return parseInt(strNumber);
    });
  }

  slices(size) {
    if (!this._numbers.length) {
      throw new Error('series cannot be empty');
    }

    if (!size) {
      throw new Error('slice length cannot be zero');
    }

    if (size < 0) {
      throw new Error('slice length cannot be negative');
    }

    if (size > this._numbers.length) {
      throw new Error('slice length cannot be greater than series length');
    }

    return [...this._numbers].map((_strNumber, i) => {
      const slice = this._numbers.substr(i, size)
      return slice.split('').map(str => parseInt(str));
    })
    .filter(slice => slice.length === size);
  }
}
