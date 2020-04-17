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
    const lifeTerm = parseInt($("#life-expectancy").val());

    let newAge = new Age(userInput, lifeTerm);
    newAge.planetCalc()
  });
});