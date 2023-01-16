const { maxNumber, sumaPares } = require('../src/retos01');


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

