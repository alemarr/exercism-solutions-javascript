const RESULTS = {
  equal: "EQUAL",
  unequal: "UNEQUAL",
  sublist: "SUBLIST",
  superlist: "SUPERLIST"
};

export class List {
  constructor(...items) {
    this._items = items;
  }

  items() {
    return this._items;
  }

  isSublist(other) {
    return (this.items().length === 0 || `,${other.items().join(",")},`.includes(`,${this._items.join(",")},`));
  }

  isSuperlist(other) {
    return (other.items().length === 0 || `,${this._items.join(",")},`.includes(`,${other.items().join(",")},`));
  }

  compare(other) {
    if (this.isSublist(other) && this.isSuperlist(other)) return RESULTS.equal;
    if (this.isSuperlist(other)) return RESULTS.superlist;
    if (this.isSublist(other)) return RESULTS.sublist;
    return RESULTS.unequal;
  }
}
