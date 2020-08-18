export default class Numerals {

  convert (number) {
    let numeralsArray = []
    if (number < 5) {
      for(let i = 0; i < number; i++) {
        numeralsArray.push("I")
      }
    }
    if (number === 5) {
      return "V"
    }
    const joinedNumerals = numeralsArray.join("")
    return joinedNumerals
  }
}