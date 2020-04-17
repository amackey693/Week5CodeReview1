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
    expect(newAge.mercuryAge).toEqual(108);
    expect(newAge.venusAge).toEqual(42);
    expect(newAge.marsAge).toEqual(14);
    expect(newAge.jupiterAge).toEqual(2);
  });
  test ('Add option for "All" to age method planetCalc() that runs and displays all new ages to the user ', () => {
    let newAge = new Age(26);
    newAge.planetCalc("All");
    expect(newAge.all).toEqual([108, 42, 14, 2]);
  });
  test ('Add property for lifeTerm to Age class and reconfigure planetCalc() to add property yearsLeft & determine how many years the user has to live on each planet', () => {
    let newAge = new Age(26, 86);
    newAge.planetCalc("All");
    expect(newAge.yearsLeft).toEqual([-22, 44, 72, 84]);
  });
})
