export default class Numerals {

  convert (number) {
    let numeralsArray = []
    for(let i = 0; i < number; i++) {
      numeralsArray.push("I")
    }
    const joinedNumerals = numeralsArray.join("")
    return joinedNumerals
  }
}