export class Triangle {
  constructor(a, b, c) {
    this.sides = [a, b, c].sort((a, b) => a - b);
  }

  get isEquilateral() {
    return !this.isInvalid() && (this.sides[0] === this.sides[1] && this.sides[0] == this.sides[2]);
  }

  get isIsosceles() {
    return !this.isInvalid() && (this.sides[0] != this.sides[2]) && !this.isScalene || this.isEquilateral ;
  }

  get isScalene() {
    return !this.isInvalid() && (this.sides[0] != this.sides[1] && this.sides[1] != this.sides[2] && this.sides[0] != this.sides[2]);
  }

  isInvalid() {
    return this.validateZeroSides() || this.hasNegativeSide() || this.validateInequality();
  }

  validateZeroSides() {
    let sumSides = this.sides[0] + this.sides[1] + this.sides[2];
    if (sumSides == 0) {
      return true;
    }

    return false;
  }

  validateInequality() {
    let sumTwoSides = this.sides[0] + this.sides[1];
    if (sumTwoSides < this.sides[2]) {
      return true;
    }

    return false;
  }

  hasNegativeSide() {
    if (this.sides[0] < 0 || this.sides[1] < 0 || this.sides[2] < 0) {
      return true;
    }

    return false;
  }
}