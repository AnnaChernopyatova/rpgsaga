import ArcherFactory from '../src/heroFactory/ArcherFactory';
import Archer from '../src/heroTypes/Archer';

describe('Archer changes state after the boost use', () => {
  it('should change', () => {
    // Arrange
    const initArcher = new ArcherFactory();
    const hero = initArcher.initHero();
    // Act
    hero.boost.useBoost(hero, hero);
    // Assert
    expect(hero).toBeInstanceOf(Archer);
    expect(hero.boost.getBoostStatus()).toBeTruthy;
  });
});
