import KnightFactory from '../src/heroFactory/KnightFactory';
import Knight from '../src/heroTypes/Knight';
import RetaliationStrike from '../src/boostTypes/RetaliationStrike';

describe('object is the instance of Knight', () => {
  it('should be instance', () => {
    // Arrange
    const initKnight = new KnightFactory();
    const hero = initKnight.initHero();
    // Act
    hero.setHealthPoints(80);
    // Assert
    expect(hero).toBeInstanceOf(Knight);
    expect(hero.boost).toBeInstanceOf(RetaliationStrike);
    expect(hero.getHealthPoints()).toBe(80);
  });
});
