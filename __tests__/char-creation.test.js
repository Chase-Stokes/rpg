import Character from './../src/char-creation.js';

describe('Character', () => {

  test('should create a new character from the character constructor', () => {
    const newCharacter = new Character (2, 4, 6, 7);
    expect(newCharacter.stamina).toEqual(2);
    expect(newCharacter.presentation).toEqual(4);
    expect(newCharacter.baking).toEqual(6);
    expect(newCharacter.flavors).toEqual(7);
  })
})