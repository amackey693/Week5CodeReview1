// Business Logic 
export class Age {
  constructor (userInput) {
    this.userInput = userInput;
    this.mercuryAge = 0;
    this.venusAge = 0; 
    this.marsAge = 0;
    this.jupiterAge = 0;
  }
  //create one big "planetCalc()" method?? revisit at the end? 
  // planetCalc() {
  //   let num = this.userInput * 365;
    
  // }

  mercuryCalc() {
    let num = this.userInput * 365; //number of days in a year
    let newAge = num/88; //number of days it takes Mercury to orbit the sun
    this.mercuryAge = this.mercuryAge + newAge;
  } 

  venusCalc() {
    let num = this.userInput * 365; 
    let newAge = num/225; //number of days it takes Venus to orbit the sun
    this.venusAge = this.venusAge + newAge;
  }

  marsCalc() {
    let num = this.userInput * 365; 
    let newAge = num/687; //number of days it takes Mars to orbit the sun
    this.marsAge = this.marsAge + newAge;
  }

  jupiterCalc() {
    let num = this.userInput * 365; 
    let newAge = num/(11.8 * 365); //number of days it takes Jupiter to orbit the sun
    this.jupiterAge = this.jupiterAge + newAge;
  }
}
