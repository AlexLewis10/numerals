import Numerals from '../src/numerals'

let numerals

beforeEach(() => {
  numerals = new Numerals()
})

describe('Converts a number to a string', () => {
  it('when given the number 1 return "I"', () => {
    expect(numerals.convert(1)).toStrictEqual("I")
  })

  it('when given the number 2 return "II"', () => {
    expect(numerals.convert(2)).toStrictEqual("II")
  })
})


