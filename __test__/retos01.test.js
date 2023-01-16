const {
  maxNumber,
  sumaPares,
  onlyString,
  startsWithA,
  wordRepeat,
} = require('../src/retos01');

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
  let mixArray = [1, 2, 'patata', 0, false, 3, 6, 'hola'];
  //WHEN
  let sut = onlyString(mixArray);
  //THEN
  expect(sut).toEqual(['patata', 'hola']);
});

test('debe devolver solo strings que empiecen por a desde una array de strings', () => {
  //GIVEN
  let arrayOfAnimals = [
    'gato',
    'perro',
    'anaconda',
    'leon',
    'aguila',
    'alpaca',
    'rinoceronte',
  ];
  //WHEN
  let sut = startsWithA(arrayOfAnimals);
  //THEN
  expect(sut).toEqual(['anaconda', 'aguila', 'alpaca']);
});
test('debe devolver el número de repeticiones de cada palabra', () => {
  //GIVEN
  let listArray = [
    'gato',
    'perro',
    'anaconda',
    'gato',
    'leon',
    'aguila',
    'alpaca',
    'perro',
    'rinoceronte',
  ];
  //WHEN
  let sut = wordRepeat(listArray);
  //THEN
  expect(sut).toEqual({
    gato: 2,
    perro: 2,
    anaconda: 1,
    leon: 1,
    aguila: 1,
    rinoceronte: 1,
  });
});
