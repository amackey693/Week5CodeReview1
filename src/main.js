import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Age } from "./../src/calculator";

//User Interface Logic 
$(document).ready(function(){
   
  $("form").submit(function(event){
    event.preventDefault();
    const userInput = parseInt($("#user-input").val());
    const lifeTerm = parseInt($("#life-term").val());
    let userSelection = $("#user-selection").val();

    let newAge = new Age(userInput, lifeTerm);
    newAge.planetCalc();
    console.log("newAge", newAge);
    console.log("lifeTerm", lifeTerm);
    console.log("mercury", newAge.all[0]);
    console.log("years left", newAge.yearsLeft[0]);
    
    if ((userInput === 0 || isNaN(userInput)) || (lifeTerm === 0 || isNaN(lifeTerm)) || (userSelection === " ")) {
      $("#output").append("<p>Please Complete the form above to get your answers! <p>");
    } 
    
    if (userSelection === "mercury" && Math.sign(newAge.yearsLeft[0] <= 0)) {
      $("#output").append("<p>Your current age on Mercury is: "+ newAge.all[0] +"</p>")
      $("#output").append("<p> You've surpassed your life expectancy by: " + Math.abs(newAge.yearsLeft[0]) + " years!</p>");
    } else if (Math.sign(newAge.yearsLeft[0]) === 1) {
      $("#output").append("<p> Your current age on Mercury is: " + newAge.all[0] + "</p>" + "<p> You still have " + Math.abs(newAge.yearsLeft[0]) + " years to live on Mercury!</p>");
    } 
  });
});