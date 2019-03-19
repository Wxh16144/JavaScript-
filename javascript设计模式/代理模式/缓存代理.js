const mult = (...arg) => arg.reduce((a, b) => a * b)
const plus = (...arg) => arg.reduce((a, b) => a + b)

const myproxy = fn => {
  const cache = {};
  return (...arg) => {
    const key = String(arg)
    if (key in cache) {
      return cache[key]
    }
    return cache[key] = fn(...arg)
  }
};

const myproxyMult = myproxy(mult)
const myproxyPlue = myproxy(plus)

console.log(myproxyMult(1, 2, 3, 4));
console.log(myproxyMult(1, 2, 3, 4, 5));
console.log(myproxyPlue(1, 2, 3, 4));
console.log(myproxyPlue(1, 2, 3, 4, 5));

console.log(myproxyMult(1, 2, 3, 4));
console.log(myproxyPlue(1, 2, 3, 4));