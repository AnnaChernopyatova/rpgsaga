import Duel from '../src/Duel';
import KnightFactory from '../src/heroFactory/KnightFactory';
import { Hero } from '../src/Hero';
import Pair from '../src/Pair';

describe('set first and second players', () => {
  it('should add attacker and opponent', () => {
    // Arrange
    const initKnight = new KnightFactory();
    const hero1 = initKnight.initHero();
    const hero2 = initKnight.initHero();
    const heroPairs = new Pair<Hero>(hero1, hero2);
    const duel = new Duel(heroPairs);
    // Act
    const loser: Hero = duel.startDuel();
    // Assert
    expect(duel.attacker).toBeDefined;
    expect(duel.opponent).toBeDefined;
    expect(loser).toBeInstanceOf(Hero);
  });
});
