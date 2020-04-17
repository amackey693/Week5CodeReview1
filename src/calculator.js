// Business Logic 
export class Age {
  constructor (userInput, lifeTerm) {
    this.userInput = userInput;
    this.lifeTerm = lifeTerm;
  }

  planetCalc() {
    let num = this.userInput * 365;  
    let num1 = this.lifeTerm;
    this.all = [];
    this.yearsLeft = [];

    let mercury = Math.round(num/88);
    let venus = Math.round(num/225);
    let mars = Math.round(num/687); 
    let jupiter = Math.round(num/(11.8 * 365));
    
    this.all = [mercury, venus, mars, jupiter];
    this.yearsLeft = [num1-mercury, num1-venus, num1-mars, num1-jupiter];

    
  }
}