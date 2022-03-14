import DummyBoost from '../src/boostTypes/DummyBoost';
import PeasantFactory from '../src/heroFactory/PeasantFactory';
import Peasant from '../src/heroTypes/Peasant';

describe('object is the instance of Peasant', () => {
  it('should be an instance', () => {
    // Arrange
    const initPeasant = new PeasantFactory();
    const hero = initPeasant.initHero();
    // Act
    const result = hero.boost.tryUseBoost;
    // Assert
    expect(hero).toBeInstanceOf(Peasant);
    expect(hero.boost).toBeInstanceOf(DummyBoost);
    expect(result).toBeFalsy;
  });
});
