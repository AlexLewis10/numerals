import Numerals from '../src/numerals'

let numerals

beforeEach(() => {
  numerals = new Numerals()
})

describe('Numerals', () => {
  it('says hello', () => {
    expect(numerals.hello()).toStrictEqual('Hello')
  })
})