//for Testing Business Logic 

import { Age } from "./../src/calculator"


// TESTS FOR AGE CALCULATOR 
describe ("Age", () => {
  test ('Age constructor holds values for UserInput', () => {
    let newAge = new Age (26);
    expect(newAge.userInput).toEqual(26);
  
  }); 

  test ('Age method planetCalc() compiles all other methods to create one large method based off of the user selection', () => {
    let newAge = new Age(26);
    newAge.planetCalc("Mercury");
    newAge.planetCalc("Venus");
    newAge.planetCalc("Mars");
    newAge.planetCalc("Jupiter");

    expect(newAge.mercuryAge).toEqual(108);
    expect(newAge.venusAge).toEqual(42);
    expect(newAge.marsAge).toEqual(14);
    expect(newAge.jupiterAge).toEqual(2);
  });

  test ('Age method planetCalc() adds all properties to constructor if they are run, otherwise they are not a part of the constructor', () => {
    let newAge = new Age(26);
    newAge.planetCalc("Mercury");
    newAge.planetCalc("Venus");
    newAge.planetCalc("Mars");
    newAge.planetCalc("Jupiter");

    expect(newAge.mercuryAge).toEqual(null);
    expect(newAge.venusAge).toEqual(null);
    expect(newAge.marsAge).toEqual(null);
    expect(newAge.jupiterAge).toEqual(null);
  });
})

