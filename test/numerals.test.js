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

  it('when given the number 5 return "V"', () => {
    expect(numerals.convert(5)).toStrictEqual("V")
  })

  it('when given the number 6 return "VI"', () => {
    expect(numerals.convert(6)).toStrictEqual("VI")
  })

  it('when given the number 10 return "X"', () => {
    expect(numerals.convert(10)).toStrictEqual("X")
  })
})


