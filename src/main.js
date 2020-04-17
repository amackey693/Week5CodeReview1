import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Age } from "./../src/calculator"

//User Interface Logic 
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    const userInput = parseInt($("#user-input").val());
    const lifeTerm = parseInt($("#life-term").val());
    let userSelection = $(".user-selection").val();

    let newAge = new Age(userInput, lifeTerm);
    newAge.planetCalc();

    if ((userInput === 0 || isNaN(userInput)) || (lifeTerm === 0 || isNaN(lifeTerm)) || (userSelection === " ")) {
      $("#output").html("<p>Please Complete the form above to get your answer! <p>")
    } 
    else if (userSelection === "mercury") {
      $("#output").html("<p> Your current age on Mercury is: " + newAge.all[0] + "</p>");
      $("#output").html("<p> You've surpassed your life expectancy by: " + Math.abs(yearsLeft[0]) + " years!</p>");
    }
    else if (userSelection === "venus") {
      $("#output").html("<p> Your current age on Venus is: " + newAge.all[1] + " years old</p>");
      $("#output").html("<p> You still have " + yearsLeft[1] + " on Venus! </p>");
    }
    else if (userSelection === "mars") {
      $("#output").html("<p> Your current age on Mars is: " + newAge.all[2] + " years old</p>");
      $("#output").html("<p> You still have " + yearsLeft[2] + " years left to on Mars! </p>");
    }
    else if (userSelection === "jupiter") {
      $("#output").html("<p> Your current age on Jupiter is: " + newAge.all[3] + " years old</p>");
      $("#output").html("<p> You still have " + yearsLeft[3] + " years left to on Mars! </p>");
    }
  });
});