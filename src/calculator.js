// Business Logic 
export class Age {
  constructor (userInput) {
    this.userInput = userInput;
    this.mercuryAge = 0
  }

  mercuryCalc() {
    let num = this.userInput * 365; //number of days in a year
    let newAge = num/88; //number of days it takes Mercury to orbit the sun
    this.mercuryAge = this.mercuryAge + newAge;
  } 

}
