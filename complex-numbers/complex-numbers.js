export class ComplexNumber {
  constructor(real, imaginary) {
    this._real = real;
    this._imaginary = imaginary;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imaginary;
  }

  add(complexNumber) {
    return new ComplexNumber(this._real + complexNumber.real, this._imaginary + complexNumber.imag);
  }

  sub(complexNumber) {
    return new ComplexNumber(this._real - complexNumber.real, this._imaginary - complexNumber.imag);
  }

  div(complexNumber) {
    const squareSum = Math.pow(complexNumber.real, 2) + Math.pow(complexNumber.imag, 2);
    const real = (this._real * complexNumber.real + this._imaginary * complexNumber.imag) /squareSum;
    const imag = (this._imaginary * complexNumber.real - this._real * complexNumber.imag) / squareSum;
    return new ComplexNumber(real, imag);
  }

  mul(complexNumber) {
    return new ComplexNumber(
        this._real * complexNumber.real - this._imaginary * complexNumber.imag,
        this._imaginary * complexNumber.real + this._real * complexNumber.imag);
  }

  get abs() {
    return Math.sqrt(Math.pow(this._real, 2) + Math.pow(this._imaginary, 2));
  }

  get conj() {
    return new ComplexNumber(this._real, this._imaginary ? this._imaginary * -1 : 0);
  }

  get exp() {
    const exp = Math.exp(this.real);
    return new ComplexNumber(exp * Math.cos(this.imag), exp * Math.sin(this.imag));
  }
}
