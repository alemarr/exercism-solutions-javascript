export class HighScores {
  constructor(scores) {
    this._scores = scores;
  }

  get scores() {
    return [...this._scores];
  }

  get latest() {
    return [...this._scores].pop();
  }

  get personalBest() {
    return Math.max(...this._scores);
  }

  get personalTopThree() {
    return [...this._scores]
      .sort((a, b) => b - a)
      .slice(0, 3);
  }
}
