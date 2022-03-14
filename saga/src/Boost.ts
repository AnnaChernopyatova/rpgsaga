import { Hero } from './Hero';
import Logger from './Logger';

export default abstract class Boost {
  private boostUsedInRound = false;
  private boostJustUsed = false;
  logger = new Logger();

  setBoostJustNow(status: boolean) {
    this.boostJustUsed = status;
  }

  getBoostJustNow() {
    return this.boostJustUsed;
  }

  setBoostInRoundStatus(status: boolean) {
    this.boostUsedInRound = status;
  }

  getBoostStatus() {
    return this.boostUsedInRound;
  }

  tryUseBoost(attacker: Hero, opponent: Hero) {
    if (attacker.boost.getBoostStatus() === false) {
      const chance: number = Math.floor(Math.random() * 3);
      if (chance === 3 || chance === 2) {
        attacker.boost.useBoost(attacker, opponent);
      }
    }
    return false;
  }
  abstract useBoost(whoUsedBoost: Hero, opponent: Hero): void;
  abstract checkBoost(whoUsedBoost: Hero, opponent: Hero): boolean;
  abstract useBoostEffect(whoUsedBoost: Hero, opponent: Hero): void;
}
