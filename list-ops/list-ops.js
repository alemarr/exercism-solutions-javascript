export class List {
  constructor(values) {
    this.values = values || [];
  }

  push(value) {
    this.values = [...this.values, value];
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concat(lists) {
    let newList = new List(this.values);

    for (const list of lists.values) {
      newList = newList.append(list);
    }

    return newList;
  }

  filter(cb) {
    const list = new List();

    for (const value of this.values) {
      if (cb(value)) {
        list.push(value);
      }
    }

    return list;
  }

  map(cb) {
    const list = new List();
    for (const value of this.values) {
      list.push(cb(value));
    }

    return list;
  }

  length() {
    // Had to add a body to the function to make it work 
    return this.foldl((acc, _) => {
      acc++;
      return acc;
    }, 0);
  }

  foldl(reducer, accumulator) {
    for (const value of this.values) {
      accumulator = reducer(accumulator, value);
    }
    return accumulator;
  }

  foldr(reducer, accumulator) {
    const list = this.reverse();
    return list.foldl(reducer, accumulator);
  }

  reverse() {
    const list = new List();
    for (let i = this.length() - 1; i >= 0; i--) {
      list.push(this.values[i]);
    }

    return list;
  }
}
