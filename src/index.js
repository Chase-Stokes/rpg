import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import Character from './char-creation.js';
import { roll } from './../src/battle-sys.js';


$("#characterForm").submit(function(event) {
  let newCharacter;
  event.preventDefault();
  let chef = $(".char-input:checked").val();
  
  if (chef === "baker") {
    newCharacter = new Character(1, -2, 5, 3)
  } else if (chef === "homeChef") {
    newCharacter = new Character(4, 2, 1, 1);
  } else {
    newCharacter = new Character(-1, 3, 1, 4);
  }
  $("#characterForm").hide();
  $("#page-one").show();
  
  $("#fair-form").submit(function(event){
    event.preventDefault();
    $("#page-one").hide();
    let battleOne = $("input:radio[name=local-comp]:checked").val();
    console.log(battleOne);
    if (battleOne === "taste"){
      let characterRoll = roll(newCharacter.baking);
      console.log(characterRoll);
      
      if (characterRoll >= 12) {
        $("#fair-success").show();
        newCharacter.expGain(75);
        
      }else {
        $("#fair-fail").show();
        newCharacter.expGain(33);
      }
    }else {
      let characterRoll = roll(newCharacter.presentation);
      if (characterRoll >= 12) {
        $("#fair-success").show();
        newCharacter.expGain(75);
      }else {
        $("#fair-fail").show();
        newCharacter.expGain(33);
      }
    }
    $("#page-two").show();
  })
})
