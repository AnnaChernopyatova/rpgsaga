import Logger from '../Logger';
import { Hero } from '../Hero';

export default class ErrorHandler {
  logger = new Logger();
  handleDummyError(hero: Hero) {
    this.logger.dummyHeroLog(hero);
  }
}
