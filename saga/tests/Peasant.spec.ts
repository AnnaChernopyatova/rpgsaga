import DummyError from '../src/Errors/DummyError';
import PeasantFactory from '../src/heroFactory/PeasantFactory';
import Peasant from '../src/heroTypes/Peasant';

describe('Peasant does nothing after the boost use', () => {
  it('should change nothing', () => {
    // Arrange
    const initPeasant = new PeasantFactory();
    const hero = initPeasant.initHero();
    // Assert
    expect(hero).toBeInstanceOf(Peasant);
    expect(hero.getDamagePoints()).toBe(0);
    expect(hero.boost.getBoostStatus).toBeFalsy;
    expect(() => hero.boost.useBoost(hero, hero)).toThrow(DummyError);
  });
});
