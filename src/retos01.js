let maxNumber = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

let sumaPares = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum += array[i];
    }
  }
  return sum;
};

let onlyString = (array) => {
  let onlyString = [];
  array.forEach((item) => {
    if (typeof item === 'string') {
      onlyString.push(item);
    }
  });
  return onlyString;
};

let startsWithA = (array) => {
  let startsWithA = [];
  for (const items of array) {
    if (items[0] == "a"){
    startsWithA.push(items)
  }
  }
  return startsWithA;
}









module.exports = { maxNumber, sumaPares, onlyString, startsWithA };
