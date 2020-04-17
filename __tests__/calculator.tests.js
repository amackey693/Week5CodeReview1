//for Testing Business Logic 

import { Age } from "./../src/calculator"


// TESTS FOR AGE CALCULATOR 
describe ("Age", () => {
  test ('Age constructor holds values for UserInput and mercuryAge is set to zero', () => {
    let newAge = new Age (26);
    expect(newAge.userInput).toEqual(26);
    expect(newAge.mercuryAge).toEqual(0);
  }); 

  test ('Age method mercuryCalc() returns proper age in mercury years based off of the users inputted age', () => {
    let newAge = new Age(26);
    newAge.mercuryCalc();
    expect(newAge.mercuryAge).toBeGreaterThanOrEqual(107.840909)
  });
  test ('Age constructor holds values for UserInput and confirms mercuryAge/venusAge are both set to zero', () => {
    let newAge = new Age (26);
    expect(newAge.userInput).toEqual(26);
    expect(newAge.mercuryAge).toEqual(0);
    expect(newAge.venusAge).toEqual(0);
  }); 
  test ('Age method venusCalc() returns proper age in venus years based off of the users inputted age', () => {
    let newAge = new Age(26);
    newAge.venusCalc();
    expect(newAge.venusAge).toBeGreaterThanOrEqual(42);
  });
  test ('Age constructor holds values for UserInput and confirms new property marsAge is set to zero', () => {
    let newAge = new Age (26);
    expect(newAge.userInput).toEqual(26);
    expect(newAge.marsAge).toEqual(0);
  }); 
})

