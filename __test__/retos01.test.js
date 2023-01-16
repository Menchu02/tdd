const { maxNumber, sumaPares } = require('../src/retos01');

test('debe devolver el número mayor de una array de números', () => {
  //GIVEN
  let numbersList = [1, 2, -5, 0];

  //WHEN
  let sut = maxNumber(numbersList);
  //THEN
  expect(sut).toBe(2);
});
