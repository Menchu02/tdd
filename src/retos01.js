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
    if (items[0] == 'a') {
      startsWithA.push(items);
    }
  }
  return startsWithA;
};

let expensiveProduct = (array) => {
  let expensiveProduct = array.filter((item) => item.precio > 10);
  return expensiveProduct;
};

let isNotDone = (array) => {
  let isNotDone = array.filter((item) => item.isDone == false);
  return isNotDone;
};


let orderedByPrice = (array) => {
  let orderedByPrice = array.sort((a, b) => a.price - b.price)
  return orderedByPrice
}

let isAdmin = (array) => {
 let orderedList = array.filter(a=>a.post == "admin");
 let newOrdered = orderedList.sort((a, b)=> {
   if (a.user > b.user) return 1
   if (a.user < b.user) return -1
   return 0
})

return newOrdered;
}

module.exports = {
  maxNumber,
  sumaPares,
  onlyString,
  startsWithA,
  expensiveProduct,
  isNotDone,
  orderedByPrice,
  isAdmin
};
