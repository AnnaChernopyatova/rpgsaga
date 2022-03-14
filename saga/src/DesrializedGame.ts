import FileReaderHeroList from './FileReaderHeroList';
import Game from './Game';
import { Hero } from './Hero';
import Pair from './Pair';
import Round from './Round';

export default class DeserializedGame extends Game {
  constructor() {
    super();
    this.heroList = new FileReaderHeroList();
  }

  run(): void {
    try {
      this.logger.gameStarted();
      const number = 0;
      this.heroList.makelist(number);
      for (let i = 1; this.heroList.heroList.length > 1; i++) {
        const pairsArray: Pair<Hero>[] = this.heroPairsMaker.makePairs(this.heroList.heroList);
        const round = new Round(this.heroList, i, pairsArray);
        round.startRound(pairsArray);
      }
      this.logger.gameOverLog(this.heroList.heroList[0]);
    } catch (error) {
      console.log(error);
    }
  }
}
