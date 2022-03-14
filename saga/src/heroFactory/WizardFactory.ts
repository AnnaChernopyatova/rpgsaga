import Fascination from '../boostTypes/Fascination';
import Wizard from '../heroTypes/Wizard';
import { Hero } from '../Hero';

import HeroFactory from './HeroFactory';

export default class WizardFactory extends HeroFactory {
  initHero(): Hero {
    const name: string = this.initRandomName();
    const lastName: string = this.initRandomLastName();
    const hp: number = this.initRandomHP();
    const damage: number = this.initRandomDamage();

    const newHero = new Wizard(name, lastName, damage, hp, new Fascination());
    return newHero;
  }
}
