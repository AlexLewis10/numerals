export default class Numerals {

  convert (number) {
    let numeralsArray = []

    if (number % 5 === 0) {
      numeralsArray.push("V")
    } else if (number < 5 && number < (5 - 1)) {
      for(let i = 0; i < number; i++) {
        numeralsArray.push("I")
      }
    } else {
      numeralsArray.push("IV")
    }

    console.log(numeralsArray)
    const joinedNumerals = numeralsArray.join("")
    return joinedNumerals
  }
}