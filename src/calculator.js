// Business Logic 
export class Age {
  constructor (userInput, lifeTerm) {
    this.userInput = userInput;
    this.lifeTerm = lifeTerm;
  }

  planetCalc(choice) {
    let num = this.userInput * 365;  
    let num1 = this.lifeTerm;

    if (choice === "All") {
      this.all = [];
      let mercury = Math.round(num/88);
      let venus = Math.round(num/225);
      let mars = Math.round(num/687); 
      let jupiter = Math.round(num/(11.8 * 365));
      this.all = [mercury, venus, mars, jupiter];
      this.yearsLeft = [num1-mercury, num1-venus, num1-mars, num1-jupiter];
    }
    else if (choice === "Mercury") {
      this.mercuryAge = Math.round(num/88);
    } 
    else if (choice === "Venus") {
      this.venusAge = Math.round(num/225);
    }
    else if (choice === "Mars") {
      this.marsAge = Math.round(num/687); 
    }
    else if (choice === "Jupiter") {
      this.jupiterAge =  Math.round(num/(11.8 * 365)); 
    }
  }
}
   // this.all = ["Mercury Age: " + mercury + ",", "Venus Age: " + venus + ",", "Mars Age: " + mars + ",", "Jupiter Age: "+ jupiter +"."]