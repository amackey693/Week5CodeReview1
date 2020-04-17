//for Testing Business Logic 

import { Age } from "./../src/calculator"


// TESTS FOR AGE CALCULATOR 
describe ("Age", () => {
  test ('Age constructor holds values for userInput & lifeTerm', () => {
    let newAge = new Age (26, 86);
    expect(newAge.userInput).toEqual(26);
    expect(newAge.lifeTerm).toEqual(86);
  }); 
  test ('Add method planetCalc() that runs and displays all new ages to the user ', () => {
    let newAge = new Age(26);
    newAge.planetCalc();
    expect(newAge.all).toEqual([108, 42, 14, 2]);
  });
  test ('Reconfigure planetCalc() method to add property yearsLeft & determine how many years the user has to live on each planet', () => {
    let newAge = new Age(26, 86);
    newAge.planetCalc();
    expect(newAge.yearsLeft).toEqual([-22, 44, 72, 84]);
  });
  
})
