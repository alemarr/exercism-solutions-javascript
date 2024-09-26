export class DiffieHellman {
  constructor(p, g) {
    this._p = p;
    this._g = g;
      if (!isPrime(this._p) || !isPrime(this._g)) {
      throw new Error("Input is not a prime number");
    }
  }

   getPublicKey(privateKey) {
    if (privateKey < 2 || privateKey >= this._p) {
      throw Error("Invalid private key.");
    }
    return Math.pow(this._g, privateKey) % this._p;
  }

   getSecret(theirPublicKey, myPrivateKey) {
    return Math.pow(theirPublicKey, myPrivateKey) % this._p;
  }
}

const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};