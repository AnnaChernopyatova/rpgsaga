import WizardFactory from '../src/heroFactory/WizardFactory';
import Attack from '../src/Attack';
import Wizard from '../src/heroTypes/Wizard';

describe('Wizard doesnt change health after boost using', () => {
  it('should stay the same', () => {
    // Arrange
    const initWizard = new WizardFactory();
    const hero1 = initWizard.initHero();
    const hero2 = initWizard.initHero();
    const attack = new Attack();
    // Act
    hero1.boost.useBoost(hero1, hero2);
    attack.checkAttack(hero2, hero1);
    // Assert
    expect(hero1).toBeInstanceOf(Wizard);
    expect(hero2).toBeInstanceOf(Wizard);
    expect(hero1.getHealthPoints()).toBe(hero1.getFullHealth());
    expect(hero2.missTurn).toBeTruthy;
  });
});
