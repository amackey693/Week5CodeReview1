// Business Logic 
export class Age {
  constructor (userInput) {
    this.userInput = userInput;
  }
  //create one big "planetCalc()" method?? revisit at the end? 
  planetCalc(choice) {
    let num = this.userInput * 365;
    
    if (choice === "Mercury") {
      let newAge = Math.round(num/88); //number of days it takes Mercury to orbit the sun
      this.mercuryAge = newAge;
    } 
    if (choice === "Venus") {
      let newAge = Math.round(num/225); //number of days it takes Venus to orbit the sun
      this.venusAge = newAge;
    }
    if (choice === "Mars") {
      let newAge = Math.round(num/687); //number of days it takes Mars to orbit the sun
      this.marsAge = newAge;
    }
    if (choice === "Jupiter") {
      let newAge = Math.round(num/(11.8 * 365)); //number of days it takes Jupiter to orbit the sun
      this.jupiterAge = newAge;
    }
  }
}

  // mercuryCalc() {
  //   let num = this.userInput * 365; //number of days in a year
  //   let newAge = Math.round(num/88); //number of days it takes Mercury to orbit the sun
  //   this.mercuryAge = this.mercuryAge + newAge;
  // } 

  // venusCalc() {
  //   let num = this.userInput * 365; 
  //   let newAge = Math.round(num/225); //number of days it takes Venus to orbit the sun
  //   this.venusAge = this.venusAge + newAge;
  // }

  // marsCalc() {
  //   let num = this.userInput * 365; 
  //   let newAge = Math.round(num/687); //number of days it takes Mars to orbit the sun
  //   this.marsAge = this.marsAge + newAge;
  // }

//   jupiterCalc() {
//     let num = this.userInput * 365; 
//     let newAge = Math.round(num/(11.8 * 365)); //number of days it takes Jupiter to orbit the sun
//     this.jupiterAge = this.jupiterAge + newAge;
//   }
