const Fizzbuzz = require('./fizzbuzz')
const fizzbuzz = new Fizzbuzz()

test("Test case 01", () => {
  expect(fizzbuzz.show(1)).toBe("1")
})

test("Test case 02", () => {
  expect(fizzbuzz.show(2)).toBe("2")
})
