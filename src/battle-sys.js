import Character from './../src/char-creation.js';

export function roll(stat){
   let roll1 = Math.floor(Math.random() * 20 ) + 1;
  return roll1 += stat;
} 

export function battle(playerRoll, enemyRoll) {
  return playerRoll > enemyRoll;
}