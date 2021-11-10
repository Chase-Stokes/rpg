import { exportAllDeclaration } from '@babel/types';
import { roll } from './../src/battle-sys.js';
import { battle } from './../src/battle-sys.js';

describe("roll", () => {

  test("should roll a random number between 1 and 20", () => {
    const roll1 = roll(2);
    expect(roll1).toBeLessThanOrEqual(22);
    expect(roll1).toBeGreaterThan(0);
  });
})

describe("battle", () => {

  test("should compare two number variables and return true if first argument is higher", () => {
    expect(battle(15, 13)).toEqual(true)
  });
})

