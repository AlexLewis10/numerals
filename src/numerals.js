export default class Numerals {

  convert (number) {
    let numeralsArray = []

    if (number < 5) {
      let multiplier = number / 1
      for(let i = 0; i < multiplier; i++) {
        numeralsArray.push("I")
      }
    
    
    // if (number === 10) {
    //   return "X"
    // } else if (number < 5 && number < (5 - 1)) {
    //   for(let i = 0; i < number; i++) {
    //     numeralsArray.push("I")
    //   }
    // } else if (number >= 5 && number < (10 - 1 )) {
    //   numeralsArray.push("V")
    //   for(let i = 5; i < number; i++) {
    //     numeralsArray.push("I")
    //   }
    // } else {
    //   numeralsArray.push("IV")
    }

    console.log(numeralsArray)
    const joinedNumerals = numeralsArray.join("")
    return joinedNumerals
  }
}