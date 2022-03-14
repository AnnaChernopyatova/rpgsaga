import RetaliationStrike from '../boostTypes/RetaliationStrike';
import { Hero } from '../Hero';
import Knight from '../heroTypes/Knight';

import HeroFactory from './HeroFactory';

export default class KnightFactory extends HeroFactory {
  initHero(): Hero {
    const name: string = this.initRandomName();
    const lastName: string = this.initRandomLastName();
    const hp: number = this.initRandomHP();
    const damage: number = this.initRandomDamage();
    const newHero = new Knight(name, lastName, damage, hp, new RetaliationStrike());
    return newHero;
  }
}
