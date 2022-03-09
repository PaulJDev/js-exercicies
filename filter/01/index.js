/* eslint-disable no-console */
//
const arr = [-1, 0, 4, 2, 3, 4, 5, 6];
const func = arr.filter((e) => e < 4);

const arrow = arr.filter((e) => e < 4);

console.log(func);
console.log(arrow);

const braquets = arr.filter((num) => {
  const number = num + 1;
  return number;
});
console.log(braquets);

const argurments = arr.filter((e, i, self) => e + 1 === self[i + 1]);
console.log(argurments);

const isLowerThanFour = (num) => num < 4;
const callFunction = arr.filter(isLowerThanFour);

console.log(callFunction);

const obj = [
  {
    name: 'Paul',
    age: 22,
  },
  {
    name: 'Cristian',
    age: 9,
  },
];

const property = obj.filter((e) => e.name === 'Paul');
console.log(property);

const destructuring = obj.filter(({ name }) => name === 'Paul');
console.log(destructuring);
