import Duel from './Duel';
import { Hero } from './Hero';
import HeroList from './HeroList';
import Logger from './Logger';
import Pair from './Pair';

export default class Round {
  numberOfRound: number;
  heroList: HeroList;
  heroPairs: Pair<Hero>[];

  logger = new Logger();

  constructor(heroList: HeroList, number: number, pairsArray: Pair<Hero>[]) {
    this.heroList = heroList;
    this.numberOfRound = number;
    this.heroPairs = pairsArray;
  }

  startRound(pairsArray: Pair<Hero>[]) {
    this.logger.roundStarts(this.numberOfRound);
    this.logger.showPairsOfPlayers(pairsArray);
    while (this.heroPairs[0] !== undefined) {
      const duel = new Duel(this.heroPairs[0]);
      const loser = duel.startDuel();
      this.heroList.deleteLoserFromList(loser);
      this.heroPairs.splice(0, 1);
    }
    this.preparForNextRound();
  }

  private preparForNextRound() {
    for (const hero of this.heroList.heroList) {
      hero.prepareForRound();
    }
  }
}
