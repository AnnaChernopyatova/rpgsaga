import NoHeroError from './Errors/NoHeroError';
import { Hero } from './Hero';
import ArcherFactory from './heroFactory/ArcherFactory';
import KnightFactory from './heroFactory/KnightFactory';
import PeasantFactory from './heroFactory/PeasantFactory';
import WizardFactory from './heroFactory/WizardFactory';
import HeroList from './HeroList';

export default class RandomGeneratorHeroList extends HeroList {
  constructor() {
    super();
    this.knightFactory = new KnightFactory();
    this.wizardFactory = new WizardFactory();
    this.archerFactory = new ArcherFactory();
    this.peasantFactory = new PeasantFactory();
    this.heroKindsArray = [this.knightFactory, this.wizardFactory, this.archerFactory, this.peasantFactory];
  }

  makelist(totalAmountOfPlayers: number) {
    for (let i = 0; i < totalAmountOfPlayers; i++) {
      const type = this.heroKindsArray[Math.floor(Math.random() * this.heroKindsArray.length)];
      const newHero: Hero = type.initHero();
      if (!newHero) {
        throw new NoHeroError('No Hero was generated.');
      }
      this.heroList.push(newHero);
    }
    if (this.heroList.length === 0) {
      throw new NoHeroError('There are no heroes who want to participate in the battle.');
    }
  }
}
