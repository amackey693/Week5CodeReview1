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
      $("#output").html("<p>Please Complete the form above to get your answers! <p>")
    } 
    // for Mercury selection
    if (userSelection === "mercury" && Math.sign(yearsLeft[0] === - 1)) {
      $("#output").html("<p> Your current age on Mercury is: " + newAge.all[0] + "</p>" + "<p> You've surpassed your life expectancy by: " + Math.abs(yearsLeft[0]) + "years!</p>");
      $("#output").html();
    } else if (Math.sign(yearsLeft[0] === 1)) {
      $("#output").html("<p> Your current age on Mercury is: " + newAge.all[0] + "</p>" + "<p> You still have " + Math.abs(yearsLeft[0]) + " years to live on Mercury!</p>");
    }
    // for Venus selection 
    if (userSelection === "venus" && Math.sign(yearsLeft[1] === 1 )) {
      $("#output").html("<p> Your current age on Venus is: " + newAge.all[1] + " years old</p>" + "<p> You still have " + yearsLeft[1] + " on Venus! </p>");
    } else if (Math.sign(yearsLeft[1] === - 1)) {
      $("#output").html("<p> Your current age on Venus is: " + newAge.all[1] + " years old</p>" + "<p> You've surpassed your life expectancy by: " + Math.abs(yearsLeft[1]) + "years!</p>");
    }

    // for Mars selection 
    if (userSelection === "mars" && Math.sign(yearsLeft[2] === 1 )) {
      $("#output").html("<p> Your current age on Venus is: " + newAge.all[2] + " years old</p>");
      $("#output").html("<p> You still have " + yearsLeft[2] + " on Venus! </p>");
    } else if (Math.sign(yearsLeft[2] === - 1)) {
      $("#output").html("<p> Your current age on Venus is: " + newAge.all[2] + " years old</p>" + "<p> You've surpassed your life expectancy by: " + Math.abs(yearsLeft[2]) + "years!</p>");
    }

    if (userSelection === "jupiter" && Math.sign(yearsLeft[3] === 1 )) {
      $("#output").html("<p> Your current age on Venus is: " + newAge.all[3] + " years old</p>");
      $("#output").html("<p> You still have " + yearsLeft[3] + " on Venus! </p>");
    } else if (Math.sign(yearsLeft[3] === - 1)) {
      $("#output").html("<p> Your current age on Venus is: " + newAge.all[3] + " years old</p>" + "<p> You've surpassed your life expectancy by: " + Math.abs(yearsLeft[3]) + "years!</p>");
    }
    
  });
});