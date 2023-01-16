const { maxNumber, sumaPares, onlyString } = require('../src/retos01');


test('debe devolver el número mayor de una array de números', () => {
  //GIVEN
  let numbersList = [1, 2, -5, 0];

  //WHEN
  let sut = maxNumber(numbersList);
  //THEN
  expect(sut).toBe(2);
});


test('debe devolver la suma de los numeros pares', () => {
  //GIVEN
  let oddList = [1, 2, 5, 0, 4, 3, 6];
  //WHEN
  let sut = sumaPares(oddList);
  //THEN
  expect(sut).toBe(12);
});

test('debe devolver solo strings en una array de strings y numeros', () => {
  //GIVEN
  let mixArray = [1, 2, "patata", 0, false, 3, 6];
  //WHEN
  let sut = onlyString(mixArray);
  //THEN
  expect(sut).toBe(["patata"]);
});

