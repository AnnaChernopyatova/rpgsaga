import ArcherFactory from '../src/heroFactory/ArcherFactory';
import Archer from '../src/heroTypes/Archer';
import FireArrows from '../src/boostTypes/FireArrows';

describe('object is the instance of Archer', () => {
  it('should be instance', () => {
    // Arrange
    const initArcher = new ArcherFactory();
    const hero = initArcher.initHero();
    // Act
    hero.setHealthPoints(80);
    // Assert
    expect(hero).toBeInstanceOf(Archer);
    expect(hero.boost).toBeInstanceOf(FireArrows);
    expect(hero.getHealthPoints()).toBe(80);
  });
});
