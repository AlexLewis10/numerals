export default class Numerals {

  convert (number) {
    let numeralsArray = []

    if (number >= 10) {
      let multiplier = number / 10
      for(let i = 0; i < multiplier; i++) {
        numeralsArray.push("X")
      }
    }
    if (number >= 5 && number < 10) {
      number = number - 5
      numeralsArray.push("V")
    }
    if (number < 5) {
      let multiplier = number / 1
      for(let i = 0; i < multiplier; i++) {
        numeralsArray.push("I")
      }
    }


    console.log(numeralsArray)
    const joinedNumerals = numeralsArray.join("")
    return joinedNumerals
  }
}