import DummyBoost from '../src/boostTypes/DummyBoost';
import KnightFactory from '../src/heroFactory/KnightFactory';
import DummyError from '../src/Errors/DummyError';

describe('object DummyBoost matches the class', () => {
  it('should match', () => {
    // Arrange
    const dummyBoost = new DummyBoost();
    const initKnight = new KnightFactory();
    const attacker = initKnight.initHero();
    // Assert
    expect(dummyBoost).toBeInstanceOf(DummyBoost);
    expect(() => dummyBoost.useBoost(attacker)).toThrow(DummyError);
    expect(() => dummyBoost.useBoostEffect(attacker)).toThrow(DummyError);
    expect(() => dummyBoost.checkBoost(attacker)).toThrow(DummyError);
  });
});
