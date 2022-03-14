import { Hero } from '../Hero';
import Peasant from '../heroTypes/Peasant';
import DummyBoost from '../boostTypes/DummyBoost';

import HeroFactory from './HeroFactory';

export default class PeasantFactory extends HeroFactory {
  initHero(): Hero {
    const name: string = this.initRandomName();
    const lastName: string = this.initRandomLastName();
    const hp = 50;
    const damage = 0;
    const newHero = new Peasant(name, lastName, damage, hp, new DummyBoost());
    return newHero;
  }
}
