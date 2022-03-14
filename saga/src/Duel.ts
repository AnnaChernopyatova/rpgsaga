import { Hero } from './Hero';
import Logger from './Logger';
import Attack from './Attack';
import Pair from './Pair';
import DummyError from './Errors/DummyError';
import ErrorHandler from './Errors/ErrorHandler';

export default class Duel {
  logger = new Logger();
  attacker: Hero;
  opponent: Hero;
  pairOfPlayers: Pair<Hero>;
  errorHandler: ErrorHandler;
  constructor(pairOfPlayers: Pair<Hero>) {
    this.pairOfPlayers = pairOfPlayers;
    this.attacker = this.pairOfPlayers.first;
    this.opponent = this.pairOfPlayers.second;
    this.errorHandler = new ErrorHandler();
  }

  startDuel(): Hero {
    try {
      this.logger.duelStarted(this.pairOfPlayers);
      this.setWhoGoesFirst();

      while (this.attacker.getHealthPoints() > 0 && this.opponent.getHealthPoints() > 0) {
        const attack = new Attack();
        attack.checkAttack(this.attacker, this.opponent);
        if (this.opponent.getHealthPoints() <= 0) {
          this.logger.stopDuelLog(this.attacker);
          return this.opponent;
        }
        attack.checkAttack(this.opponent, this.attacker);
      }

      if (this.opponent.getHealthPoints() <= 0) {
        this.logger.stopDuelLog(this.attacker);
        return this.opponent;
      }
    } catch (error) {
      if (error instanceof DummyError) {
        this.errorHandler.handleDummyError(error.dummy);
        return error.dummy;
      }
    }
    this.logger.stopDuelLog(this.opponent);
    return this.attacker;
  }

  private setWhoGoesFirst(): void {
    const number: number = Math.floor(Math.random());
    if (number !== 0) {
      this.attacker = this.pairOfPlayers.second;
      this.opponent = this.pairOfPlayers.first;
    } else {
      this.attacker = this.pairOfPlayers.first;
      this.opponent = this.pairOfPlayers.second;
    }
    this.logger.firstAttackLog(this.attacker);
  }
}
