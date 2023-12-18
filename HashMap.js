class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hashedKey = this._hash(key);
    console.log("hashed key is ", hashedKey);
    console.log(this.keyMap[hashedKey]);
    if (this.keyMap[hashedKey] === undefined) this.keyMap[hashedKey] = [];
    this.keyMap[hashedKey].push([key, value]);
    return this.keyMap[hashedKey];
  }

  get(key) {
    const hashedKey = this._hash(key);
    if (this.keyMap[hashedKey] === undefined) return undefined;

    for (let el of this.keyMap[hashedKey]) {
      if (el[0] === key) return el[1];
    }
  }
}

const map = new HashTable();
