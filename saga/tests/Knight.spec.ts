import KnightFactory from '../src/heroFactory/KnightFactory';
import Knight from '../src/heroTypes/Knight';

describe('Knight changes state after the boost use', () => {
  it('should change', () => {
    // Arrange
    const initKnight = new KnightFactory();
    const hero = initKnight.initHero();
    // Act
    hero.boost.useBoost(hero, hero);
    // Assert
    expect(hero).toBeInstanceOf(Knight);
    expect(hero.boost.getBoostStatus()).toBeTruthy;
  });
});
