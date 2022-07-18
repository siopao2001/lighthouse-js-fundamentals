const target = { a: 1, b: 2, c:9 };
const source = { b: 4, c: 2 };

Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }


