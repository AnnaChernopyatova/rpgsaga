import Attack from '../src/Attack';
import KnightFactory from '../src/heroFactory/KnightFactory';
import Archer from '../src/heroTypes/Archer';
import Knight from '../src/heroTypes/Knight';

describe('pass all checks and perform the attack', () => {
  it('should be successful', () => {
    // Arrange
    const attack = new Attack();
    const initKnight = new KnightFactory();
    const attacker = initKnight.initHero();
    const opponent = initKnight.initHero();
    // Act
    attack.checkAttack(attacker, opponent);
    // Assert
    if (attacker.boost.getBoostJustNow() === false) {
      expect(opponent.getHealthPoints()).toBe(opponent.getFullHealth() - attacker.getDamagePoints());
    } else {
      if (attacker instanceof Archer && attacker.boost.getBoostJustNow() === true) {
        expect(opponent.getHealthPoints()).toBe(opponent.getFullHealth());
      } else if (attacker instanceof Knight && attacker.boost.getBoostJustNow() === true) {
        expect(opponent.getHealthPoints()).toBe(
          opponent.getFullHealth() - attacker.getDamagePoints() - Math.floor(attacker.getDamagePoints() * 0.3),
        );
      } else {
        expect(opponent.getHealthPoints()).toBe(opponent.getFullHealth() - attacker.getDamagePoints());
      }
    }
  });
});
