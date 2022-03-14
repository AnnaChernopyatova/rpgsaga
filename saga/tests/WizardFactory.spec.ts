import WizardFactory from '../src/heroFactory/WizardFactory';
import Wizard from '../src/heroTypes/Wizard';
import Fascination from '../src/boostTypes/Fascination';

describe('object is the instance of Wizard', () => {
  it('should be instance', () => {
    // Arrange
    const initWizard = new WizardFactory();
    const hero = initWizard.initHero();
    // Act
    hero.setHealthPoints(80);
    // Assert
    expect(hero).toBeInstanceOf(Wizard);
    expect(hero.boost).toBeInstanceOf(Fascination);
    expect(hero.getHealthPoints()).toBe(80);
  });
});
