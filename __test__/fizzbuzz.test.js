const fizzbuzz= require("../src/fizzbuzz")
test('debe devolver si el numero es multiple de 3', ()=>{
    //GIVEN dado un numero multiple de 3
    const num = 9 
    //WHEN
    let sut = fizzbuzz (num)
    //THEN
    expect(sut).toBe("Fizz")
})
test('debe devolver si el numero es multiple de 5', ()=>{
    //GIVEN dado un numero multiple de 3
    const num = 10 
    //WHEN
    let sut = fizzbuzz (num)
    //THEN
    expect(sut).toBe("Buzz")
})
test('debe devolver si el numero es multiple de 3 y 5', ()=>{
    //GIVEN dado un numero multiple de 3
    const num = 15 
    //WHEN
    let sut = fizzbuzz (num)
    //THEN
    expect(sut).toBe("FizzBuzz")
})
test('debe devolver si el numero no es multiple de 3 o de 5 ', ()=>{
    //GIVEN dado un numero multiple de 3
    const num = 2
    //WHEN
    let sut = fizzbuzz (num)
    //THEN
    expect(sut).toBe(2)
})