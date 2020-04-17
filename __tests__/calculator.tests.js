//for Testing Business Logic 

import { Mercury } from "./../src/calculator"


// TESTS FOR MERCURY AGE CALCULATOR 
describe ("Mercury", () => {
  test ('Mercury constructor holds values for UserInput and Mercury Age is set to zero', () => {
    let newAge = new Mercury (26);
    expect(newAge.userInput).toEqual(26);
    expect(newAge.mercuryAge).toEqual(0);
  }); 

  test ('Mercury method mercuryCalc() returns proper age in mercury years based off of the users inputted age', () => {
    let newAge = new Mercury(26);
    newAge.mercuryCalc();
    expect(newAge.mercuryAge).toEqual(107.840909)
  });
})

