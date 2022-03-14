import prompt, { Schema } from 'prompt';

import Game from './Game';
import { Hero } from './Hero';
import Logger from './Logger';
import Pair from './Pair';
import RandomGeneratorHeroList from './RandomGeneratorHeroList';
import Round from './Round';

export default class GeneratedGame extends Game {
  constructor() {
    super();
    this.heroList = new RandomGeneratorHeroList();
  }
  run(): void {
    const schema: Schema = {
      properties: {
        numberOfPlayers: {
          description: 'Enter the number of players that is a deuce to any power:',
          pattern: /[0-9]/,
          message: 'The input must be a number!',
        },
      },
    };
    try {
      this.logger.gameStarted();
      prompt.get(schema, (err, result) => {
        const logger = new Logger();
        const inputNumber = parseInt(result.numberOfPlayers as string);
        if ((inputNumber & (inputNumber - 1)) !== 0 || inputNumber === 0) {
          logger.errorLog();
          throw new Error('Not suitable number');
        }
        if (err) {
          return onErr(err);
        }
        this.heroList.makelist(inputNumber);
        for (let i = 1; this.heroList.heroList.length > 1; i++) {
          const pairsArray: Pair<Hero>[] = this.heroPairsMaker.makePairs(this.heroList.heroList);
          const round = new Round(this.heroList, i, pairsArray);
          round.startRound(pairsArray);
        }
        this.logger.gameOverLog(this.heroList.heroList[0]);
      });
      const onErr = (err: Error) => {
        console.log(err);
        return 1;
      };
    } catch (error) {
      console.log(error);
    }
  }
}
