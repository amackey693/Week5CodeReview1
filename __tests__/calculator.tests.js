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
  test ('Age method marsCalc() returns proper age in mars years based off of the users inputted age', () => {
    let newAge = new Age(26);
    newAge.marsCalc();
    expect(newAge.marsAge).toBeGreaterThanOrEqual(13);
  });
  test ('Age constructor holds values for UserInput and confirms new property jupiterAge is set to zero', () => {
    let newAge = new Age (26);
    expect(newAge.userInput).toEqual(26);
    expect(newAge.jupiterAge).toEqual(0);
  }); 
  test ('Age method jupiterCalc() returns proper age in jupiter years based off of the users inputted age', () => {
    let newAge = new Age(26);
    newAge.jupiterCalc();
    expect(newAge.jupiterAge).toBeGreaterThanOrEqual(2);
  });
  test ('All age methods will return the age rounded to the nearest whole number ', () => {
    let newAge = new Age(26);
    newAge.mercuryCalc();
    newAge.venusCalc();
    newAge.marsCalc();
    newAge.jupiterCalc();

    expect(newAge.mercuryAge).toEqual(108);
    expect(newAge.venusAge).toEqual(42);
    expect(newAge.marsAge).toEqual(14);
    expect(newAge.jupiterAge).toEqual(2);
  });
  test ('Age method planetCalc() compiles all other methods to create one large method based off of the user selection', () => {
    let newAge = new Age(26);
    newAge.planetCalc("choice");
    expect(newAge.mercuryAge).toBeGreaterThanOrEqual(null);
    expect(newAge.venusAge).toBeGreaterThanOrEqual(null);
    expect(newAge.marsAge).toBeGreaterThanOrEqual(null);
    expect(newAge.jupiterAge).toBeGreaterThanOrEqual(null);
  })


})

