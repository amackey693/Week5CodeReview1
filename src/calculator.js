// Business Logic 
export class Mercury {
  constructor (userInput) {
    this.userInput = userInput;
    this.mercuryAge = 0
  }

  mercuryCalc(age) {
    let age = this.UserInput;
    num = age * 365; //number of days in a year
    let newAge = num/88; //number of days it takes Mercury to orbit the sun
    this.mercuryAge = newAge;
  } 

}
