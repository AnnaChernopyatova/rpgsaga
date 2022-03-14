import Logger from './Logger';
import HeroPairsMaker from './HeroPairsMaker';
import HeroList from './HeroList';

export default abstract class Game {
  heroPairsMaker: HeroPairsMaker;
  heroList!: HeroList;

  constructor() {
    this.heroPairsMaker = new HeroPairsMaker();
  }

  logger = new Logger();

  abstract run(): void;
}
