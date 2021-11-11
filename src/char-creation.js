export default class Character {

  constructor(stamina, presentation, baking, flavors) {
    this.stamina = stamina;
    this.presentation = presentation;
    this.baking = baking;
    this.flavors = flavors;
    this.experience = 0;
  }
}

Character.prototype.expGain = function(num){
  this.experience += num;
  if (this.experience >= 100){
    this.experience === 0
    return "Level Up!"
  }
}



