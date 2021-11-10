import { exportAllDeclaration } from '@babel/types';
import { roll } from './../src/battle-sys.js';

describe("roll", () => {

  test("should roll a random number between 1 and 20", () => {
    const roll1 = roll();
    expect(roll1).toBeLessThanOrEqual(20);
    expect(roll1).toBeGreaterThan(0);
  });
})