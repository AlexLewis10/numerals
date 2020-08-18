export default class Numerals {
  constructor () {
    this.numeralsArray = []
  }

  convert (number) {
    let multiplier = 0

    if (number >= 100) {
      multiplier = this.calculateMultiplier(number, 100)
      this.addToArray(multiplier, "C")
      number = this.calculateNewNumber(number, multiplier, 100)
    }
    
    if (number >= 50 && number < 100) {
      multiplier = this.calculateMultiplier(number, 50)
      this.addToArray(multiplier, "L")
      number = this.calculateNewNumber(number, multiplier, 50)
    }
    if (number >= 10 && number < 50) {
      multiplier = this.calculateMultiplier(number, 10)
      this.addToArray(multiplier, "X")
      number = this.calculateNewNumber(number, multiplier, 10)
    }
    if (number >= 5 && number < 10) {
      number = number - 5
      this.numeralsArray.push("V")
    }
    if (number < 5) {
      multiplier = number / 1
      this.addToArray(multiplier, "I")
    }
    
    // console.log(numeralsArray)
    const joinedNumerals = this.numeralsArray.join("")
    return joinedNumerals
  }



  addToArray (multiplier, numeral) {
    for(let i = 0; i < multiplier; i++) {
      this.numeralsArray.push(numeral)
    }
  }

  calculateMultiplier (number, numeralValue) {
    return Math.floor(number / numeralValue)
  }

  calculateNewNumber (number, multiplier, numeralValue) {
    return number - (multiplier * numeralValue)
  }
}

