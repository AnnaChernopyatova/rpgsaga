import Archer from '../heroTypes/Archer';
import FireArrows from '../boostTypes/FireArrows';
import { Hero } from '../Hero';

import HeroFactory from './HeroFactory';

export default class ArcherFactory extends HeroFactory {
  initHero(): Hero {
    const name: string = this.initRandomName();
    const lastName: string = this.initRandomLastName();
    const hp: number = this.initRandomHP();
    const damage: number = this.initRandomDamage();
    const newHero = new Archer(name, lastName, damage, hp, new FireArrows());
    return newHero;
  }
}
